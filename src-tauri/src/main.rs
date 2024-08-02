// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

use std::{env, process::Command};

fn main() {
    let current_dir = env::current_dir().expect("Failed to get current directory.");
    println!("Current directory: {}", current_dir.display());
  //Start python server so I don't manually have to do it everytime I run this app.
  Command::new("sh")
      .arg("-c")
      .arg("source .././venv/bin/activate && python3 ../src/API.py")
      .spawn()
      .expect("Failed to start python server");

  tauri::Builder::default()
    .run(tauri::generate_context!())
    .expect("error while running tauri application");
}
