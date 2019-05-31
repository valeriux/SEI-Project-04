from app import app
from controllers import products, categories, auth

app.register_blueprint(products.router, url_prefix='/api')
app.register_blueprint(categories.router, url_prefix='/api')
app.register_blueprint(auth.router, url_prefix='/api')
