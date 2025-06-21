# Microservices with React and Node.js

A comprehensive microservices architecture learning project demonstrating modern web development practices with React, TypeScript, and Node.js.

## 📋 Project Overview

This project implements a mini microservices application that demonstrates:
- Microservices architecture patterns
- Inter-service communication via event bus
- React TypeScript frontend
- Node.js backend services
- Event-driven architecture

## 🏗️ Architecture

The application consists of:
- **Client** (Port 3000): React + TypeScript frontend application
- **Posts Service** (Port 4000): Microservice for managing blog posts  
- **Comments Service** (Port 4001): Microservice for managing comments
- **Query Service** (Port 4002): Data aggregation service using CQRS pattern
- **Moderation Service** (Port 4003): Comment moderation service
- **Event Bus** (Port 4005): Central event coordination service

## 📚 Documentation

### Course Materials
[Notion Course Link](https://www.notion.so/Microservices-with-react-and-node-21430c6e8cbd80bba421cef36377564b?source=copy_link)

### Memory Bank
Comprehensive project documentation is maintained in the `memory-bank/` directory:
- `projectbrief.md` - Core project purpose and objectives
- `productContext.md` - User experience and business context
- `systemPatterns.md` - Architecture patterns and design decisions
- `techContext.md` - Technology stack and development setup
- `activeContext.md` - Current work focus and recent changes
- `progress.md` - Implementation status and next steps

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm package manager
- Windows environment with PowerShell

### Installation
1. Clone the repository:
```bash
git clone <repository-url>
cd MICROSERVICES_NODE_JS
```

2. Install client dependencies:
```bash
cd 02_A_Mini_Microservices_App/client
npm install
```

3. Install service dependencies:
```bash
# Posts service (🐳 CONTAINERIZED)
cd ../posts
pnpm install

# Comments service (✅ Event-enabled)
cd ../comments  
pnpm install

# Query service (✅ Functional)
cd ../query
pnpm install

# Moderation service (✅ COMPLETE)
cd ../moderation
pnpm install

# Event Bus service (✅ Functional)
cd ../event-bus
pnpm install
```

### Running the Application

#### Option 1: Traditional Development
Start each service in separate terminals:

```bash
# Terminal 1 - Client Application
cd 02_A_Mini_Microservices_App/client
npm run dev

# Terminal 2 - Posts Service (🐳 or locally)
cd 02_A_Mini_Microservices_App/posts
pnpm run dev  # or pnpm run docker:run:dev for container

# Terminal 3 - Comments Service (✅ Event-enabled)
cd 02_A_Mini_Microservices_App/comments
pnpm run dev

# Terminal 4 - Query Service (✅ CQRS aggregation)
cd 02_A_Mini_Microservices_App/query
pnpm run dev

# Terminal 5 - Moderation Service (✅ COMPLETE with content filtering)
cd 02_A_Mini_Microservices_App/moderation
pnpm run dev

# Terminal 6 - Event Bus Service (✅ ENTERPRISE-LEVEL with event storage)
cd 02_A_Mini_Microservices_App/event-bus
pnpm start
```

#### Option 2: Container Development (Posts Service)
```bash
# Build and run Posts service in container
cd 02_A_Mini_Microservices_App/posts
pnpm run docker:build
pnpm run docker:run:dev  # With volume mount for hot reload

# Run other services locally as above
```

## 📁 Project Structure

```
MICROSERVICES_NODE_JS/
├── memory-bank/                 # Project documentation and memory
├── 02_A_Mini_Microservices_App/
│   ├── client/                  # React TypeScript frontend (✅ Event-driven)
│   │   ├── src/components/      # React components with aggregated data consumption
│   │   ├── src/api/             # API layer with QUERY service integration
│   │   ├── package.json         # Dependencies including Tailwind CSS
│   │   └── vite.config.ts       # Vite configuration
│   ├── posts/                   # Posts microservice (🐳 CONTAINERIZED)
│   │   ├── src/index.ts         # TypeScript Express server with PostCreated emission
│   │   ├── Dockerfile           # Development container configuration
│   │   ├── Dockerfile.production # Production optimized container
│   │   ├── docker-compose.yml   # Service orchestration
│   │   ├── .dockerignore        # Container build optimization
│   │   ├── DOCKER.md            # Container documentation
│   │   ├── docker.sh/.bat       # Container management scripts
│   │   ├── package.json         # Dependencies and Docker scripts
│   │   └── posts.postman_collection.json  # API testing
│   ├── comments/                # Comments microservice (✅ COMPLETE with bi-directional events)
│   │   ├── src/index.ts         # TypeScript Express server with CommentUpdated events
│   │   ├── src/index.d.ts       # TypeScript interfaces for all event types
│   │   ├── package.json         # Dependencies with axios for events
│   │   └── .prettierrc          # Code formatting
│   ├── query/                   # Query service (✅ COMPLETE with event sourcing)
│   │   ├── src/index.ts         # Event-driven data aggregation with replay
│   │   ├── src/types.ts         # TypeScript event and data types
│   │   ├── package.json         # Dependencies for event handling
│   │   └── .prettierrc          # Code formatting
│   ├── moderation/              # Moderation service (✅ COMPLETE with content filtering)
│   │   ├── src/index.ts         # Full comment moderation with keyword filtering
│   │   ├── src/types.ts         # TypeScript event type definitions
│   │   ├── package.json         # Dependencies configured
│   │   ├── tsconfig.json        # TypeScript configuration
│   │   └── .prettierrc          # Code formatting
│   └── event-bus/              # Event coordination service (✅ ENTERPRISE-LEVEL)
│       ├── src/index.ts         # Central event routing with storage and replay
│       └── package.json         # Dependencies for event handling
├── diagrams/                    # Architecture diagrams
└── readme.md                    # This file
```

## 🛠️ Technologies Used

### Frontend
- React 19.1.0 with TypeScript
- Vite 6.3.5 for fast development
- ESLint for code quality
- Modern CSS3 styling

### Backend
- Node.js with Express.js
- TypeScript for type safety
- CommonJS modules for services
- CORS for cross-origin requests
- Axios for HTTP communication and event publishing

### Development
- Windows PowerShell environment
- **pnpm** primary package management for better performance
- **Docker Desktop** for container development and deployment
- Hot reload development with tsx/nodemon
- Prettier code formatting consistency
- Memory bank documentation system

## 📖 Learning Objectives

This project demonstrates:
- **Service Decomposition**: Breaking monoliths into focused microservices with clear boundaries
- **Event-Driven Architecture**: Complete CQRS pattern with enterprise-level automated workflows
- **Inter-Service Communication**: Full event publishing and consumption with comprehensive moderation pipeline
- **Automated Content Moderation**: Keyword-based filtering with real-time event-driven status updates
- **Event Sourcing**: Complete event storage and replay capability for state reconstruction
- **Container Deployment**: Docker containerization with pnpm optimization and multi-stage builds
- **API Design**: RESTful service interfaces enhanced with comprehensive event-driven architecture
- **Frontend Integration**: React consuming aggregated data with real-time synchronization
- **Modern Development**: TypeScript, event sourcing, microservices patterns, and enterprise best practices

## 🚧 Current Status

- ✅ **Project Structure**: Complete with comprehensive memory bank documentation
- ✅ **React Client**: Event-driven data consumption with aggregated posts and embedded comments
- ✅ **Posts Service**: **🐳 CONTAINERIZED** - TypeScript Express.js server with Docker + pnpm optimization
- ✅ **Comments Service**: **COMPLETE** - Full event lifecycle with status updates and CommentUpdated events
- ✅ **Query Service**: **COMPLETE** - CQRS implementation with event sourcing and replay capability
- ✅ **Event Bus**: **ENTERPRISE-LEVEL** - Event storage, replay endpoint, and comprehensive error handling
- ✅ **Moderation Service**: **COMPLETE** - Full comment filtering with CommentModerated event emission
- ✅ **🎉 Event-Driven Architecture**: **COMPLETE** - All services fully integrated with comprehensive event flow
- 🔄 **🐳 Containerization**: **PARTIAL** - Posts service containerized, other services pending

### 🎯 **MAJOR MILESTONE ACHIEVED**: Complete enterprise-level event-driven microservices architecture with Docker containerization foundation!

## 📄 License

This project is for educational purposes as part of a microservices learning course.
