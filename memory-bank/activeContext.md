# Active Context

## Current Focus
Setting up the microservices project structure and preparing comprehensive documentation. The project is in the initial setup phase with React client application scaffolded using Vite, and basic package.json files created for the Posts and Comments services.

## Recent Changes
- React TypeScript client application has been created with Vite
- Posts service package.json configured with CommonJS modules
- Comments service package.json configured with CommonJS modules
- README files were initially empty and need proper documentation
- Memory bank structure has been established

## Immediate Next Steps
1. **Update README Files**: Create comprehensive documentation for each service and the main project
2. **Implement Posts Service**: Create the Express.js server with CRUD endpoints
3. **Implement Comments Service**: Create the Express.js server with comment management
4. **Create Event Bus Service**: Implement the central event coordination service
5. **Update Client Application**: Modify React app to consume microservices

## Key Decisions Made
- **Module System**: Using CommonJS for Node.js services, ES modules for React client
- **Technology Stack**: React 19 + TypeScript + Vite for frontend, Express.js for services
- **Port Allocation**: Client:3000, Posts:4000, Comments:4001, Event Bus:4005
- **Documentation Strategy**: Comprehensive README files for each component

## Current File States
- **Main README**: Contains only Notion course link, needs comprehensive update
- **Posts README**: Empty, needs service documentation
- **Comments README**: Empty, needs service documentation
- **Client**: Fully scaffolded React TypeScript application with Vite
- **Services**: Only package.json files exist, need implementation

## Active Patterns and Preferences
- **Documentation-First**: Creating thorough documentation before implementation
- **Service Isolation**: Each service has its own directory and package.json
- **Modern Tooling**: Using latest versions of React, TypeScript, and build tools
- **Educational Focus**: Prioritizing learning and understanding over production concerns

## Important Considerations
- This is a learning project, so emphasize clarity and educational value
- Use in-memory storage for simplicity
- Focus on microservices patterns rather than production concerns
- Maintain clean separation between services
- Document API endpoints and event schemas clearly

## Development Environment Notes
- Windows development environment with PowerShell
- Using npm as package manager
- Vite for fast frontend development
- Express.js for lightweight service implementation

## Learning Objectives in Progress
- Understanding microservices decomposition
- Implementing event-driven communication
- Practicing modern React with TypeScript
- Learning service-to-service communication patterns
