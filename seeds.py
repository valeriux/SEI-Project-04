from pony.orm import db_session
from app import db
from models.Product import Product
from models.Category import Category
from models.User import User, UserSchema

db.drop_all_tables(with_all_data=True)
db.create_tables()

with db_session():
    schema = UserSchema()
    valeriux = User(
        username='valeriux',
        email='valeriux@hotmail.com',
        password_hash=schema.generate_hash('pass')
    )

    schema = UserSchema()
    doris = User(
        username='doris',
        email='diobraderu@hotmail.com',
        password_hash=schema.generate_hash('pass')
    )


    Body_Care = Category(name='Body Care')
    Bath = Category(name='Bath')
    Hair_Care = Category(name='Hair Care')



    Product(
        name='Acai Beautifying Dry Oil',
        images=['https://www.naturabrasil.fr/product/image/large/50172170_1.jpg', 'https://www.naturabrasil.fr/product/image/large/50145694_1.jpg'],
        description='A wonderful and amazingly soft skin, with a delicious perfume.',
        price='25',
        qty="12",
        address='Great Russell Street, London',
        latitude=51.51936,
        longitude=-0.12687,
        postcode='WC1B 3DG',
        category=Body_Care,
        user=valeriux
    )

    Product(
        name='Acai Soft Body Cream - EKOS',
        images=['https://www.naturabrasil.fr/product/image/large/50145694_1.jpg', 'https://www.naturabrasil.fr/product/image/large/50172170_1.jpg'],
        description='A 30h body hydration with a sweet fragrance.',
        price='20',
        qty="3",
        address='1 Lime Street, London',
        latitude=51.51301,
        longitude=-0.08228,
        postcode='EC3M 7HA',
        category=Bath,
        user=valeriux
        )



    db.commit()
