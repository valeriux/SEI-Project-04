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

    Body_Care = Category(name='Body Care')
    Bath = Category(name='Bath')
    Hair_Care = Category(name='Hair Care')



    Product(
        name='Acai Beautifying Dry Oil',
        image='https://www.naturabrasil.fr/product/image/large/50172170_1.jpg',
        description='A wonderful and amazingly soft skin, with a delicious perfume.',
        price='25',
        Qty="12",
        categories=[Body_Care],
        user=valeriux
    )

    Product(
        name='Acai Soft Body Cream - EKOS',
        image='https://www.naturabrasil.fr/product/image/large/50189140_1.jpg',
        description='A 30h body hydration with a sweet fragrance.',
        price='20',
        Qty="3",
        categories=[Body_Care],
        user=valeriux
        )

    Product(
        name='Buriti Conditioner for Dull or Colored Hair - EKOS',
        image='https://www.naturabrasil.fr/product/image/large/50145694_1.jpg',
        description='Beautiful palm tree of the Cerrado region, in the center of Brazil, the Buriti gives a fruit with multiple benefits for the local people.',
        price='16',
        Qty="8",
        categories=[Hair_Care],
        user=valeriux
        )

    db.commit()
