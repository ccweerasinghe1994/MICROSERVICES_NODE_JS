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
- **npm**: Package manager
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
  /posts/              # Posts microservice
    package.json       # Service dependencies
    index.js           # Service entry point
  /comments/           # Comments microservice
    package.json       # Service dependencies
    index.js           # Service entry point
  /event-bus/          # Event bus service
/diagrams/             # Architecture diagrams
```

## Development Environment
- **OS**: Windows
- **Shell**: PowerShell (pwsh.exe)
- **Node.js Version**: 16+ required
- **Package Manager**: npm (standard with Node.js)

## Port Allocation
- **Client**: 3000 (Vite dev server)
- **Posts Service**: 4000
- **Comments Service**: 4001
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
- Development with nodemon for auto-restart
- Simple in-memory data storage

## Dependencies Overview

### Client Dependencies
- **Production**: react, react-dom
- **Development**: @vitejs/plugin-react, typescript, eslint, vite

### Service Dependencies
- **Production**: express, cors, axios
- **Development**: nodemon (for development)

## Configuration Files
- **tsconfig.json**: TypeScript configuration for client
- **eslint.config.js**: ESLint rules for client
- **vite.config.ts**: Vite build configuration
- **package.json**: Dependencies and scripts for each service

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
