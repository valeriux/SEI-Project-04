from flask import Flask, jsonify
from pony.orm import Database

app = Flask(__name__)
db = Database()
# connects to the database
db.bind(provider='postgres', database='natura_db')


from config import routes

db.generate_mapping(create_tables=True)

@app.errorhandler(404)
def not_found(_error):
    return jsonify({'message': 'Not found'}), 404
