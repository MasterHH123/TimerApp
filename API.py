import os
from flask import Flask, render_template
from config.config import *
from dotenv import load_dotenv
load_dotenv()

app = Flask(__name__)

app.config['APP_URL'] = os.getenv('APP_URL')

@app.route('/')
def index():
    hours = list(range(24))
    minutes = list(range(60))
    seconds = list(range(60))
    return render_template('index.html', hours = hours, minutes = minutes, seconds = seconds), HTTP_OK





if __name__ == '__main__':
    app.run(port=7070)
    index()
    
