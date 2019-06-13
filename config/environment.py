import os

db_uri = os.getenv('DATABASE_URL', 'postgres://localhost:5432/natura_db')
secret = os.getenv('SECRET', 'something good')
