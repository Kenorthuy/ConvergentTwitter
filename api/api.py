from flask import Flask, jsonify, request
from flask_cors import CORS
import pandas as pd
import csv

app = Flask(__name__)

# enable debugging mode
app.config["DEEBUG"] = True


# def hello():
#     data = request.get_json()
#     search = data.get("search")
#     print(search)


# @app.route("/data")
# def index():
#     with open('.data/covid_recent.csv') as csv_file:
#         data = csv.reader(csv_file, delimiter=",")
#         first_line = True
#         results = []
#         for row in data:
#             if not first_line:
#                 results.append({
#                     "created_at": row[0],
#                     "tweet_id": row[1],
#                     "tweet_username": row[2],
#                     "user_name": row[3],
#                     "tweet_text": row[4],
#                     "tweet_likes": row[5],
#                     "tweet_retweets": row[6]
#                 })
#             else:
#                 first_line = False
#     return results

@app.route('/')
def parseCSV():
    # col_names = ['created_at', 'tweet_id', 'tweet_username', 'user_name', 'tweet_text', 'tweet_likes', 'tweet_retweets']
    header = True
    csvData = pd.read_csv('./data/covid_recent.csv')
    arr = csvData.to_numpy()
    return(arr[2][2])



if __name__ == '__main__':
    app.run(debug=True)