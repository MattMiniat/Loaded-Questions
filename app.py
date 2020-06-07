import os
import pandas as pd
from flask import (
    Flask,
    render_template,
    request,
    jsonify,
    redirect)
import csv
import json

app = Flask(__name__)
# app.config['SQLALCHEMY_DATABASE_URI'] = os.environ.get('DATABASE_URL', '')

@app.route("/")
def home():
    return render_template("index.html", page="home")

@app.route("/table")
def table():
    return render_template("table.html", page="table")

@app.route("/visuals")
def visuals():
    return render_template("visuals.html", page="visuals")

@app.route("/api/data")
def data():
    df = pd.read_csv("data/data.csv")
    json_data = df.to_json(orient='records')
    return json_data

if __name__ == "__main__":
    app.run()