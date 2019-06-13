import os
from flask import abort
from app import app
from controllers import products, categories, auth

app.register_blueprint(products.router, url_prefix='/api')
app.register_blueprint(categories.router, url_prefix='/api')
app.register_blueprint(auth.router, url_prefix='/api')

#  Antes
# @app.route('/')
# @app.route('/<path:path>')
# def catch_all(path='index.html'):
#
#     if os.path.isfile('public/' + path):
#         return app.send_static_file(path)
#
#     return abort(404)



@app.route('/') # homepage
@app.route('/<path:path>') # any other path
def catch_all(path='index.html'):

    if os.path.isfile('public/' + path): # if path is a file, send it back
        return app.send_static_file(path)

    return app.send_static_file('index.html')
