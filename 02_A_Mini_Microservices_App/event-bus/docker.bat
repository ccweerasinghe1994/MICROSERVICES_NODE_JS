@echo off
REM Posts Service Docker Management Script for Windows

setlocal enabledelayedexpansion

REM Service configuration
set SERVICE_NAME=posts-service
set IMAGE_NAME=posts-service
set PORT=4000

if "%1"=="" goto :help
if "%1"=="help" goto :help
if "%1"=="build" goto :build
if "%1"=="run" goto :run
if "%1"=="stop" goto :stop
if "%1"=="restart" goto :restart
if "%1"=="logs" goto :logs
if "%1"=="shell" goto :shell
if "%1"=="clean" goto :clean
if "%1"=="status" goto :status

echo [ERROR] Unknown command: %1
goto :help

:help
echo Usage: docker.bat [COMMAND]
echo.
echo Commands:
echo   build      Build the Docker image
echo   run        Run the container
echo   stop       Stop the container
echo   restart    Restart the container
echo   logs       Show container logs
echo   shell      Open shell in running container
echo   clean      Stop and remove container
echo   status     Show container status
echo   help       Show this help message
goto :end

:build
echo [INFO] Building Docker image: %IMAGE_NAME%
docker build -t %IMAGE_NAME% .
if %errorlevel% equ 0 (
    echo [INFO] Image built successfully
) else (
    echo [ERROR] Failed to build image
    exit /b 1
)
goto :end

:run
echo [INFO] Starting container: %SERVICE_NAME%

REM Check if container is already running
docker ps -q -f name=%SERVICE_NAME% > temp.txt
set /p running=<temp.txt
del temp.txt

if not "!running!"=="" (
    echo [WARNING] Container %SERVICE_NAME% is already running. Stopping it first...
    docker stop %SERVICE_NAME%
    docker rm %SERVICE_NAME%
)

docker run -d --name %SERVICE_NAME% -p %PORT%:%PORT% --restart unless-stopped %IMAGE_NAME%
if %errorlevel% equ 0 (
    echo [INFO] Container started successfully
    echo [INFO] Service is available at: http://localhost:%PORT%
) else (
    echo [ERROR] Failed to start container
    exit /b 1
)
goto :end

:stop
echo [INFO] Stopping container: %SERVICE_NAME%
docker stop %SERVICE_NAME% 2>nul
if %errorlevel% equ 0 (
    echo [INFO] Container stopped
) else (
    echo [WARNING] Container %SERVICE_NAME% is not running
)
goto :end

:restart
call :stop
timeout /t 2 /nobreak >nul
call :run
goto :end

:logs
echo [INFO] Showing logs for container: %SERVICE_NAME%
docker logs -f %SERVICE_NAME%
goto :end

:shell
echo [INFO] Opening shell in container: %SERVICE_NAME%
docker exec -it %SERVICE_NAME% sh
goto :end

:clean
echo [INFO] Cleaning up container: %SERVICE_NAME%
docker stop %SERVICE_NAME% 2>nul
docker rm %SERVICE_NAME% 2>nul
echo [INFO] Container cleaned up
goto :end

:status
echo [INFO] Container status:
docker ps -q -f name=%SERVICE_NAME% > temp.txt
set /p running=<temp.txt
del temp.txt

if not "!running!"=="" (
    echo ✓ Running
    docker ps -f name=%SERVICE_NAME% --format "table {{.Names}}\t{{.Status}}\t{{.Ports}}"
) else (
    echo ✗ Not running
)
goto :end

:end
endlocal
