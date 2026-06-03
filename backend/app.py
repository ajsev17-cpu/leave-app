from fastapi import FastAPI
import pandas as pd

app = FastAPI()

@app.get("/")
def read_root():
    return {"message": "Leave App Backend is running"}

@app.get("/leaves")
def get_leaves():
    # Load sample CSV
    df = pd.read_csv("data/leave_cards_master.csv")
    return df.to_dict(orient="records")
