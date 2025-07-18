#!/bin/bash

set -e

echo "Cleaning old Docker containers and images"
docker-compose down -v --rmi all --remove-orphans

echo "Building and starting Docker containers using compose"
docker-compose up -d --build

echo "Waiting for Postgresql"
until docker exec postgres pg_isready -U postgres > /dev/null 2>&1; do
  sleep 2
done

echo "Finished Initialization"
