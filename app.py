from flask import Flask, jsonify
from pony.orm import Database

from config.environment import db_uri

app = Flask(__name__, static_folder='public')
db = Database()

db.bind('postgres', db_uri)

# Antes
# app = Flask(__name__)
# db = Database()
#
# db.bind(provider='postgres', database='natura_db')


from config import routes

db.generate_mapping(create_tables=True)

@app.errorhandler(404)
def not_found(_error):
    return jsonify({'message': 'Not found'}), 404
