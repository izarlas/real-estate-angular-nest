#!/bin/bash

set -e

echo "Rebuilding and starting Docker containers"
docker-compose down -v --rmi all --remove-orphans
docker-compose up -d --build

echo "Finished Initialization"