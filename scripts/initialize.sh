#!/bin/bash

set -e

echo "Cleaning old Docker containers and images"
docker-compose down -v --rmi all --remove-orphans

echo "Building and starting Docker containers using compose"
docker-compose up -d --build

echo "Waiting for Postgresql"
until docker exec database pg_isready -U postgres > /dev/null 2>&1; do
  sleep 2
done

echo "Running database setup"
docker exec database psql -U postgres -d postgresdb -f /docker-entrypoint-initdb.d/init.sql

echo "Seeding database with mock data"
docker exec database psql -U postgres -d postgresdb -f /docker-entrypoint-initdb.d/seed.sql

echo "Finished Initialization"
