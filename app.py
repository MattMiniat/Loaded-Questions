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
from sqlalchemy import create_engine

database_path = "resources/guns_data_db.db"
engine = create_engine(f"sqlite:///{database_path}")
conn = engine.connect()
data = pd.read_sql("Select * FROM statistics", conn)

app = Flask(__name__)

@app.route("/")
def home():
    return render_template("index.html", page="home")

@app.route("/trends")
def trends():
    return render_template("trends.html", page="trends")

@app.route("/visuals")
def visuals():
    return render_template("visuals.html", page="visuals")


@app.route("/api/data/deaths")
def deathData():
    return getDataByYear('STATE', 'DEATHS', 'sum')

@app.route("/api/data/hfr")
def hfrData():
    return getDataByYear('STATE', 'HFR', 'min')

@app.route("/api/data/death_cause")
def deathCause():
    return getDataByYear('cause_of_death', 'DEATHS', 'sum')

@app.route("/api/data/suicide_gender")
def genderSuicide():
    df = data
    df = df[['YEAR', "Fem_FS_S", "Male_FS_S"]]
    df = df.groupby('YEAR').agg("mean").reset_index()
    json_data = df.to_json(orient='records')
    return json_data

def getDataByYear(column, value, agg):
    df = data
    df = df[['YEAR', column, value]]
    df = df.groupby([column, 'YEAR']).agg([agg]).reset_index()
    df.columns = df.columns.droplevel(1)
    df = df.pivot(index='YEAR', columns=column, values=value).reset_index()
    json_data = df.to_json(orient='records')
    return json_data

if __name__ == "__main__":
    app.run()