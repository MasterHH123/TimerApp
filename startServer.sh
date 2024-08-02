#!/bin/bash

#activate venv
source ./venv/bin/activate

#start server
python3 src/API.py &

#start tauri app
cargo tauri dev
