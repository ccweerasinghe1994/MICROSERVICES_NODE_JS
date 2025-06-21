#!/bin/bash

# Posts Service Docker Management Script

set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Service configuration
SERVICE_NAME="posts-service"
IMAGE_NAME="posts-service"
PORT="4000"

# Functions
print_usage() {
    echo "Usage: ./docker.sh [COMMAND]"
    echo ""
    echo "Commands:"
    echo "  build      Build the Docker image"
    echo "  run        Run the container"
    echo "  stop       Stop the container"
    echo "  restart    Restart the container"
    echo "  logs       Show container logs"
    echo "  shell      Open shell in running container"
    echo "  clean      Stop and remove container"
    echo "  status     Show container status"
    echo "  help       Show this help message"
}

print_info() {
    echo -e "${GREEN}[INFO]${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

print_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

build_image() {
    print_info "Building Docker image: $IMAGE_NAME"
    docker build -t $IMAGE_NAME .
    print_info "Image built successfully"
}

run_container() {
    print_info "Starting container: $SERVICE_NAME"
    
    # Stop existing container if running
    if docker ps -q -f name=$SERVICE_NAME | grep -q .; then
        print_warning "Container $SERVICE_NAME is already running. Stopping it first..."
        docker stop $SERVICE_NAME
        docker rm $SERVICE_NAME
    fi
    
    docker run -d \
        --name $SERVICE_NAME \
        -p $PORT:$PORT \
        --restart unless-stopped \
        $IMAGE_NAME
    
    print_info "Container started successfully"
    print_info "Service is available at: http://localhost:$PORT"
}

stop_container() {
    print_info "Stopping container: $SERVICE_NAME"
    if docker ps -q -f name=$SERVICE_NAME | grep -q .; then
        docker stop $SERVICE_NAME
        print_info "Container stopped"
    else
        print_warning "Container $SERVICE_NAME is not running"
    fi
}

restart_container() {
    stop_container
    sleep 2
    run_container
}

show_logs() {
    print_info "Showing logs for container: $SERVICE_NAME"
    docker logs -f $SERVICE_NAME
}

open_shell() {
    print_info "Opening shell in container: $SERVICE_NAME"
    docker exec -it $SERVICE_NAME sh
}

clean_container() {
    print_info "Cleaning up container: $SERVICE_NAME"
    docker stop $SERVICE_NAME 2>/dev/null || true
    docker rm $SERVICE_NAME 2>/dev/null || true
    print_info "Container cleaned up"
}

show_status() {
    print_info "Container status:"
    if docker ps -q -f name=$SERVICE_NAME | grep -q .; then
        echo -e "${GREEN}✓ Running${NC}"
        docker ps -f name=$SERVICE_NAME --format "table {{.Names}}\t{{.Status}}\t{{.Ports}}"
    else
        echo -e "${RED}✗ Not running${NC}"
    fi
}

# Main script logic
case "${1:-help}" in
    build)
        build_image
        ;;
    run)
        run_container
        ;;
    stop)
        stop_container
        ;;
    restart)
        restart_container
        ;;
    logs)
        show_logs
        ;;
    shell)
        open_shell
        ;;
    clean)
        clean_container
        ;;
    status)
        show_status
        ;;
    help)
        print_usage
        ;;
    *)
        print_error "Unknown command: $1"
        print_usage
        exit 1
        ;;
esac
