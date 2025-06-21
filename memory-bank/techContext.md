# Technical Context

## Technology Stack

### Frontend (Client)
- **React 19.1.0**: Latest React with modern features
- **TypeScript 5.8.3**: Strong typing and better developer experience
- **Vite 6.3.5**: Fast build tool and development server
- **ESLint**: Code quality and consistency
- **CSS**: Modern styling with CSS3

### Backend Services
- **Node.js**: JavaScript runtime for server-side development
- **Express.js**: Web framework for REST APIs
- **CORS**: Cross-origin resource sharing middleware
- **Axios**: HTTP client for service-to-service communication

### Development Tools
- **PowerShell**: Default shell on Windows
- **pnpm**: Primary package manager for better performance and dependency management
- **Docker Desktop**: Container development and deployment platform
- **ESLint**: Linting for TypeScript/JavaScript
- **TypeScript ESLint**: TypeScript-specific linting rules

## Project Structure Standards
```
/memory-bank/           # Documentation and memory files
/02_A_Mini_Microservices_App/
  /client/             # React TypeScript frontend
    /src/              # Source code
    /public/           # Static assets
    package.json       # Frontend dependencies
  /posts/              # Posts microservice (CONTAINERIZED)
    /src/              # TypeScript source code
    package.json       # Service dependencies
    Dockerfile         # Development container
    Dockerfile.production # Production container
    docker-compose.yml # Service orchestration
    .dockerignore      # Container build optimization
  /comments/           # Comments microservice
    package.json       # Service dependencies
    index.js           # Service entry point
  /event-bus/          # Event bus service
/diagrams/             # Architecture diagrams
```

## Development Environment
- **OS**: Windows
- **Shell**: PowerShell (pwsh.exe)
- **Node.js Version**: 24+ (for latest features and performance)
- **Package Manager**: pnpm (preferred for efficiency and better dependency management)
- **Container Platform**: Docker Desktop for Windows

## Port Allocation
- **Client**: 3000 (Vite dev server)
- **Posts Service**: 4000 (containerized)
- **Comments Service**: 4001
- **Query Service**: 4002
- **Moderation Service**: 4003
- **Event Bus**: 4005

## Build and Development Configuration

### Client (Vite + React + TypeScript)
- TypeScript compilation with strict mode
- Hot module replacement for development
- ESLint with React hooks and TypeScript rules
- Modern ES2020+ target

### Services (Node.js + Express)
- CommonJS module system
- Express middleware for CORS and JSON parsing
- Development with nodemon/tsx for auto-restart
- Simple in-memory data storage
- **Docker containerization** with multi-stage builds
- **pnpm dependency management** for optimized installs

## Dependencies Overview

### Client Dependencies
- **Production**: react, react-dom
- **Development**: @vitejs/plugin-react, typescript, eslint, vite

### Service Dependencies
- **Production**: express, cors, axios
- **Development**: nodemon, tsx (for TypeScript execution)
- **Container**: Docker, pnpm (global package manager)

## Configuration Files
- **tsconfig.json**: TypeScript configuration for client and services
- **eslint.config.js**: ESLint rules for client
- **vite.config.ts**: Vite build configuration
- **package.json**: Dependencies and scripts for each service
- **Dockerfile**: Container configuration for development
- **Dockerfile.production**: Optimized container for production
- **docker-compose.yml**: Multi-service orchestration
- **.dockerignore**: Container build optimization

## API Standards
- REST API endpoints
- JSON request/response format
- HTTP status codes for error handling
- CORS headers for browser compatibility

## Event Communication
- HTTP POST for event publishing
- JSON event payloads
- Async event processing
- Event type-based routing
