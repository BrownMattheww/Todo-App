## Deployment Setup

The application backend is containerized using Docker and connects to a privately hosted PostgreSQL database running on a Raspberry Pi.

The database is not directly accessible to users. All communication with the database is handled through the Spring Boot REST API, which uses Spring Security and JWT authentication to protect resources.

## Architecture

The application follows a client-server architecture:

```
User
 |
 v
React Frontend
 |
 |  Authenticated API Requests
 v
Spring Boot REST API
 |
 +----------------------+
 |                      |
 v                      v
Spring Security        Spring Data JPA
 |
 v
JWT Authentication
 |
 v
PostgreSQL Database
(Private Raspberry Pi)

```

## What I Learned

Through this project I gained experience with:

- Implementing JWT authentication with Spring Security
- Securing REST APIs
- Understanding authentication and authorization flows
- Containerizing Spring Boot applications with Docker
- Connecting applications to privately hosted databases
- Managing application configuration using environment variables
- Building a full-stack application with React and Spring Boot

## Tech Stack

### Backend
- Java 21
- Spring Boot
- Spring Security
- Spring Data JPA
- Hibernate
- JWT (JSON Web Tokens)
- Maven

### Frontend
- React
- JavaScript
- HTML
- CSS

### Database
- PostgreSQL
- Self-hosted on Raspberry Pi

### Deployment
- Docker
- Environment variables
