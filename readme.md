# Express GraphQL Server with Docker

This repository contains an Express GraphQL server that can be run using Docker. It utilizes the Drizzle ORM for database management and interacts with the TMDb API for movie-related data.

## Prerequisites

Before running the server, ensure you have the following prerequisites installed:

- Docker
- Docker Compose

## Getting Started

1. Clone this repository to your local machine:

   ```bash
   git clone https://github.com/fanatic75/movie-service.git
   ```

2. Navigate to the project directory:

   ```bash
   cd movie-app-backend
   ```

3. Create a `.env` file in the root directory and add the following environment variables:

   ```plaintext
   TMDB_API_URL=https://api.themoviedb.org/3
   DATABASE_URL=postgres://postgres:password@db:5432/postgres
   TMDB_API_KEY=3105wef
   PORT=3000
   NODE_ENV=development
   ```

   Replace `postgres:password` with your PostgreSQL credentials if different.

4. Build the Docker image and spin up the containers:

   ```bash
   docker-compose up --build
   ```

5. Once the containers are up and running, you can access the GraphQL playground at `http://localhost:3000/graphql` in your browser.

## Database Migrations

Database migrations are managed using Drizzle. To create migrations, follow these steps(migrations runs automatically when service is deployed):

1. Ensure the Docker containers are running.

2. Run the following command to create a new migration:

   ```bash
   pnpm migrate:generate
   ```

## Docker Compose Services

- `server`: Express GraphQL server container.
- `db`: PostgreSQL database container.

## Contributing

Feel free to contribute to this project by opening issues or submitting pull requests.

## License

This project is licensed under the [MIT License](LICENSE).
