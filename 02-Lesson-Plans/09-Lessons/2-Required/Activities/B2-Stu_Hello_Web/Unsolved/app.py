# dependencies
import sqlalchemy
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from sqlalchemy import create_engine, func

from flask import Flask, jsonify

# create new Flask app instance
app = Flask(__name__)

# index route
@app.route('/')
def hello():
    return('Hello World')

# about route
@app.route('/about')
def about():
    return('My name is Victor and I am located in California.')

# contact route
@app.route('/contact')
def contact():
    return('You can reach me at victor123@gmail.com')

