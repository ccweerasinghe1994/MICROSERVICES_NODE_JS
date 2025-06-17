# Active Context

## Current Focus
Event-driven architecture implementation is now in progress! The project has advanced significantly with the introduction of a query service for data aggregation, event publishing in the comments service, and the scaffolding of a moderation service. The frontend has been refactored to consume aggregated data from the query service, demonstrating the CQRS (Command Query Responsibility Segregation) pattern.

## Recent Changes
- **Query Service Implementation**: Created new service on port 4002 for aggregating posts and comments via event handling
- **Frontend Data Model Refactor**: Frontend now fetches posts with embedded comments from query service instead of separate API calls
- **Event-Driven Comments**: Comments service now emits CommentCreated events to event bus with comment status
- **Moderation Service Scaffolding**: Basic Express.js server created on port 4003 for future comment moderation
- **QUERY API Integration**: Added QUERY API to frontend with dynamic base URL selection
- **Code Formatting**: Added Prettier configuration to all services (.prettierrc files) for consistent code style
- **TypeScript Type Improvements**: Enhanced type definitions in query service with proper event types and comment status
- **Frontend Component Updates**: Refactored CommentList component to use embedded comment data from posts

## Immediate Next Steps
1. **Complete Moderation Logic**: Implement actual comment moderation in the moderation service (currently only logs events)
2. **Event Bus Enhancement**: Improve event propagation and ensure all services receive events
3. **Comment Status Updates**: Implement status updates from moderation service back to query service
4. **Service Documentation**: Create comprehensive README files for query and moderation services
5. **Error Handling**: Add better error handling for event failures and service communication

## Key Decisions Made
- **Event-Driven Architecture**: Implementing CQRS pattern with query service for read operations
- **Data Model**: Posts now contain embedded comments (aggregated view) instead of separate comment fetching
- **Port Allocation**: Client:3000, Posts:4000, Comments:4001, Query:4002, Moderation:4003, Event Bus:4005
- **Event Schema**: CommentCreated events include postId, content, and status fields
- **Code Consistency**: Prettier configuration standardized across all services

## Current File States
- **Posts Service**: ✅ Fully functional with event publishing capability
- **Comments Service**: ✅ Enhanced with event emission to event bus and comment status tracking
- **Query Service**: ✅ Newly created for data aggregation via event handling (port 4002)
- **Moderation Service**: 🔄 Scaffolded basic Express.js server (port 4003) - needs moderation logic
- **Client Application**: ✅ Refactored to use query service for aggregated post/comment data
- **Event Bus**: ✅ Existing service receiving events from comments service
- **Code Formatting**: ✅ Prettier configuration added to all services

## Active Patterns and Preferences
- **Event-Driven Communication**: Services communicate via events rather than direct HTTP calls
- **CQRS Pattern**: Separating command operations (posts/comments services) from query operations (query service)
- **Service Isolation**: Each service maintains its own data and responsibilities
- **Aggregated Data Views**: Query service provides optimized read views by aggregating event data
- **Status Tracking**: Comments include status fields for moderation workflow
- **Code Consistency**: Prettier formatting enforced across all services

## Important Considerations
- Event-driven architecture introduces eventual consistency
- Query service rebuilds state from events (event sourcing lite)
- Comment status workflow: pending → approved/rejected
- All services should handle event failures gracefully
- Maintain clear event schemas for inter-service communication

## Development Environment Notes
- Windows development environment with PowerShell
- Using npm/pnpm as package managers
- Vite for fast frontend development
- Express.js with tsx/nodemon for backend hot reload
- TypeScript compilation for type safety across services

## Learning Objectives in Progress
- Understanding CQRS and event sourcing patterns
- Implementing event-driven microservices communication  
- Managing eventual consistency in distributed systems
- Practicing modern React with aggregated data consumption
- Learning service decomposition and inter-service event schemas
