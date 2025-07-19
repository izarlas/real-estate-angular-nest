## Real Estate Application with ANGULAR and NEST using Typescript

This project aims to demonstrate a real estate web application implementation using typescript, for educational purposes

### The stack

- Frontend - Angular 20
- Backend - NestJs
- Database - PostgreSQL
- API - Rest
- Auth - Json Web Token (JWT)
- DevOps - Docker, Swagger, OpenAPI

### Features

### Getting started

- Install dependencies:
  ```sh
  npm install
  ```
- Start both client and server:
  ```sh
  npm run start
  ```
- Run the client, server and the database using compose:

  ```sh
  docker-compose up -d
  ```

- Access the client UI at [localhost:4200](http://localhost:4200)
- Access the server at [localhost:3000](http://localhost:3000)

- Alternatively, use the quick start bash script from root running `./scripts/initialize.sh`
  The script removes and clears any docker containers and images, re-builds the containers and finally starts the postgresql with an initial mock dataset

### API Endpoints

### Testing

### License

This project is licensed under the MIT License.

### Todo

- Add class-validation pipes in nest
- Ensure the server can run without docker
- Setup Jest for testing
- Add sign up/in
- Add search bar logic
- Improve read me
- Ensure images width/height respond to different screen sizes (in both house/details)
- Add jest tests for apis with high coverage
- Add custom error handling for apis
