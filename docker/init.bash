#!/usr/bin/env bash

CODE_PATH="/code/screamstastic-functions/functions"

if [[ -d $CODE_PATH ]]; then
    echo "Found application directory"
    cd $CODE_PATH
    rm -rf node_modules
    npm install
fi

exec bash
