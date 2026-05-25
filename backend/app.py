from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

users = [
    {"id": 1, "name": "Noor"},
    {"id": 2, "name": "DevOps"}
]

@app.route("/api/users")
def get_users():
    return jsonify(users)

@app.route("/")
def home():
    return "Flask Backend Running"

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000)