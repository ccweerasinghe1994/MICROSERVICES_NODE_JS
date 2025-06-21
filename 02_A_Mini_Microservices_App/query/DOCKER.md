# Posts Service Docker Guide

## Docker Setup

This guide explains how to containerize and run the Posts microservice using Docker with pnpm as the package manager.

## Prerequisites

- Docker installed on your system
- Docker Compose (optional, for multi-service setup)
- pnpm lockfile (pnpm-lock.yaml) present in the project

## Building the Docker Image

```bash
# Build the Docker image
pnpm run docker:build

# Or build manually
docker build -t posts-service .
```

## Running the Container

### Basic Run
```bash
# Run the container
pnpm run docker:run

# Or run manually
docker run -p 4000:4000 --name posts-service posts-service
```

### Advanced Run with Environment Variables
```bash
# Run with custom port mapping and environment variables
docker run -p 4000:4000 \
  --name posts-service \
  -e NODE_ENV=production \
  posts-service
```

### Running in Detached Mode
```bash
# Run container in background
docker run -d -p 4000:4000 --name posts-service posts-service
```

## Container Management

```bash
# Stop the container
pnpm run docker:stop
# or
docker stop posts-service

# Remove the container
pnpm run docker:remove
# or
docker rm posts-service

# View container logs
docker logs posts-service

# View running containers
docker ps

# Execute commands inside the container
docker exec -it posts-service sh
```

## Health Check

The container includes a health check that verifies the service is responding:

```bash
# Check container health
docker inspect --format='{{.State.Health.Status}}' posts-service
```

## Multi-Service Setup

For running with other microservices, use Docker Compose:

```yaml
# docker-compose.yml (example)
version: '3.8'
services:
  posts:
    build: ./posts
    ports:
      - "4000:4000"
    environment:
      - NODE_ENV=production
    healthcheck:
      test: ["CMD", "wget", "--no-verbose", "--tries=1", "--spider", "http://localhost:4000/posts"]
      interval: 30s
      timeout: 10s
      retries: 3
```

## API Endpoints

Once running, the service provides:

- `GET http://localhost:4000/posts` - Get all posts
- `POST http://localhost:4000/posts` - Create a new post
- `POST http://localhost:4000/events` - Receive events from event bus

## Troubleshooting

### Container won't start
```bash
# Check container logs
docker logs posts-service

# Check if port is already in use
netstat -tulpn | grep :4000
```

### Build fails
```bash
# Clean Docker cache
docker system prune

# Rebuild without cache
docker build --no-cache -t posts-service .
```

### Permission issues
The container runs as a non-root user (`posts`) for security. If you encounter permission issues:

```bash
# Check file permissions in your project
ls -la

# Ensure Docker has access to your project directory
```

## Security Features

- Runs as non-root user (`posts`)
- Uses Alpine Linux for smaller attack surface
- Only installs production dependencies
- Includes health checks for monitoring

## Performance Optimization

- Uses Node.js 24 Alpine for smaller image size and latest features
- Multi-stage build ready (can be enhanced for production)
- Efficient layer caching with proper COPY order for pnpm
- `.dockerignore` file excludes unnecessary files but includes pnpm-lock.yaml
- Uses `pnpm install --frozen-lockfile` for reproducible builds
- pnpm store optimization in production builds for smaller final image
