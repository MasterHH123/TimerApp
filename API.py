from flask import Flask, render_template
from config.config import *
app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html'), HTTP_OK

if __name__ == '__main__':
    app.run(port=7070)
    index()
    
