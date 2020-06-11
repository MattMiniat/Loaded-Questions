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
    df = pd.read_csv("data/gun_data.csv")
    # df = df[['YEAR', 'STATE', 'DEATHS']]
    # df = df.groupby(['STATE', 'YEAR']).agg(['sum']).reset_index()
    # df.columns = df.columns.droplevel(1)

    # df = df.pivot(index='YEAR', columns='STATE', values='DEATHS').reset_index()
    # json_data = df.to_json(orient='records')


#TEST
    hfr_data = df[['YEAR', 'STATE', 'HFR']]
    pp = hfr_data.groupby(['STATE', 'YEAR']).agg(['min']).reset_index()
    pp.columns = pp.columns.droplevel(1)
    pp = pp.pivot(index='YEAR', columns='STATE', values='HFR').reset_index()
    json_data = pp.to_json(orient='records')
    return json_data

if __name__ == "__main__":
    app.run()