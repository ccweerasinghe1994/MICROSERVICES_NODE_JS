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
# Posts service 
cd ../posts
npm install

# Comments service (✅ Event-enabled)
cd ../comments  
npm install

# Query service (✅ Functional)
cd ../query
npm install

# Moderation service (🔄 Scaffolded)
cd ../moderation
npm install

# Event Bus service (✅ Functional)
cd ../event-bus
npm install
```

### Running the Application
Start each service in separate terminals:

```bash
# Terminal 1 - Client Application
cd 02_A_Mini_Microservices_App/client
npm run dev

# Terminal 2 - Posts Service 
cd 02_A_Mini_Microservices_App/posts
npm run dev

# Terminal 3 - Comments Service (✅ Event-enabled)
cd 02_A_Mini_Microservices_App/comments
npm run dev

# Terminal 4 - Query Service (✅ CQRS aggregation)
cd 02_A_Mini_Microservices_App/query
npm run dev

# Terminal 5 - Moderation Service (🔄 Basic scaffolding)
cd 02_A_Mini_Microservices_App/moderation
npm run dev

# Terminal 6 - Event Bus Service
cd 02_A_Mini_Microservices_App/event-bus
npm start
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
│   ├── posts/                   # Posts microservice (✅ Functional)
│   │   ├── src/index.ts         # TypeScript Express server with CORS
│   │   ├── dist/                # Compiled JavaScript
│   │   ├── package.json         # Dependencies and scripts
│   │   └── posts.postman_collection.json  # API testing
│   ├── comments/                # Comments microservice (✅ Event-enabled)
│   │   ├── src/index.ts         # TypeScript Express server with event emission
│   │   ├── src/index.d.ts       # TypeScript interfaces
│   │   ├── package.json         # Dependencies with axios for events
│   │   └── .prettierrc          # Code formatting
│   ├── query/                   # Query service (✅ CQRS implementation)
│   │   ├── src/index.ts         # Event-driven data aggregation
│   │   ├── src/types.ts         # TypeScript event and data types
│   │   ├── package.json         # Dependencies for event handling
│   │   └── .prettierrc          # Code formatting
│   ├── moderation/              # Moderation service (🔄 Scaffolded)
│   │   ├── src/index.ts         # Basic Express server for event handling
│   │   ├── package.json         # Dependencies configured
│   │   ├── tsconfig.json        # TypeScript configuration
│   │   └── .prettierrc          # Code formatting
│   └── event-bus/              # Event coordination service (✅ Functional)
│       ├── src/index.js         # Central event routing and distribution
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
- npm/pnpm package management
- Hot reload development with tsx/nodemon
- Prettier code formatting consistency
- Memory bank documentation system

## 📖 Learning Objectives

This project demonstrates:
- **Service Decomposition**: Breaking monoliths into focused microservices
- **Event-Driven Architecture**: CQRS pattern with query service for data aggregation
- **Inter-Service Communication**: Event publishing and consumption patterns
- **API Design**: RESTful service interfaces with event-driven enhancements
- **Frontend Integration**: React consuming aggregated data from query service
- **Modern Development**: TypeScript, Vite, event sourcing, and current best practices

## 🚧 Current Status

- ✅ **Project Structure**: Complete with comprehensive memory bank documentation
- ✅ **React Client**: Event-driven data consumption with aggregated posts and embedded comments
- ✅ **Posts Service**: TypeScript Express.js server with CORS and API endpoints
- ✅ **Comments Service**: Enhanced with event emission to event bus and status tracking
- ✅ **Query Service**: CQRS implementation aggregating data from events
- ✅ **Event Bus**: Functional service handling event distribution
- 🔄 **Moderation Service**: Scaffolded but needs moderation logic implementation  
- 🔄 **Event-Driven Flow**: Comments events working, posts events and moderation logic pending

## 📄 License

This project is for educational purposes as part of a microservices learning course.
