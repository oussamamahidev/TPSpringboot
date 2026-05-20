# SpringDataRest

Spring Boot REST API + React UI for managing voitures and proprietaires. The backend uses Spring Data JPA and Spring Data REST with Postgres. The frontend is a CRA app served by Nginx in Docker.

## Architecture
- Backend: Java 21 Spring Boot API on port 8083
- Frontend: React app served on port 3000
- Database: Postgres 16

## Project layout
- [src/main/java](src/main/java) - Spring Boot source
- [src/main/resources/application.properties](src/main/resources/application.properties) - app config
- [src/main/webapp/reactjs](src/main/webapp/reactjs) - React app
- [src/main/docker-compose.yml](src/main/docker-compose.yml) - Docker Compose stack
- [src/main/Dockerfile](src/main/Dockerfile) - backend image
- [src/main/webapp/reactjs/Dockerfile](src/main/webapp/reactjs/Dockerfile) - frontend image

## Run with Docker Compose
From the repo root:

```
docker compose -f src/main/docker-compose.yml up --build
```

Open:
- http://localhost:3000
- http://localhost:8083/voitures
- http://localhost:8083/api

Stop services:

```
docker compose -f src/main/docker-compose.yml down
```

Remove database data:

```
docker compose -f src/main/docker-compose.yml down -v
```

## Run locally (no Docker)
### Backend
Requires Java 21.

Option A: local Postgres on port 5432 with database `springboot`, user `postgres`, password `admin` (see [src/main/resources/application.properties](src/main/resources/application.properties)):

```
./mvnw spring-boot:run
```

Option B: start Postgres with Docker and run the backend:

```
docker run --name springdatarest-db -e POSTGRES_DB=springboot -e POSTGRES_USER=postgres -e POSTGRES_PASSWORD=admin -p 5432:5432 -d postgres:16-alpine
./mvnw spring-boot:run
```

If your database runs on another port (for example 5433 from Docker Compose), override the datasource:

```
SPRING_DATASOURCE_URL=jdbc:postgresql://localhost:5433/springboot \
SPRING_DATASOURCE_USERNAME=postgres \
SPRING_DATASOURCE_PASSWORD=admin \
./mvnw spring-boot:run
```

### Frontend

```
cd src/main/webapp/reactjs
npm install
npm start
```

The React app calls `http://localhost:8083/voitures`, so keep the backend on port 8083 or update the frontend API URLs.

## Tests
- Backend: `./mvnw test`
- Frontend: run `npm test` in [src/main/webapp/reactjs](src/main/webapp/reactjs)

## Notes
- Spring Data REST base path is `/api` (see [src/main/resources/application.properties](src/main/resources/application.properties)).
- CORS is configured for `http://localhost:3000` in [src/main/java/org/springdatarest/web/VoitureController.java](src/main/java/org/springdatarest/web/VoitureController.java).
