#!/bin/bash
set +x

if [[ ! -f .env ]]
then
    echo "Copying env file..."
    cp .env.example .env
fi
