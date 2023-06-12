#!/bin/bash

docker compose up --build --no-recreate -d

docker exec -it kis-website sh

npm i && npm run dev