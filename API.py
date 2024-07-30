from flask import Flask, render_template
from config.config import *
app = Flask(__name__)

@app.route('/')
def index():
    hours = list(range(23))
    minutes = list(range(59))
    seconds = list(range(59))
    return render_template('index.html', hours = hours, minutes = minutes, seconds = seconds), HTTP_OK

if __name__ == '__main__':
    app.run(port=7070)
    index()
    
