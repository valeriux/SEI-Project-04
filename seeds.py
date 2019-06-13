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
    Hand_Feet = Category(name='Hair and Feet')


    Product(
        name='Acai Beautifying Dry Oil',
        images=['https://www.naturabrasil.fr/product/image/large/50172170_1.jpg', 'https://www.naturabrasil.fr/product/image/medium/50172119-huile-seche-ekos-castanha.jpg', 'https://res.cloudinary.com/feelunique-com/image/upload/f_auto,t_product_listing/v1/live/product/main-image/79304/fchtpv1deft6vcazrlme.jpg'],
        description='A wonderful and amazingly soft skin, with a delicate and comforting fragrance. The beautifying dry oil Ekos Castanha is enriched with Castanha oil and 100% vegetal oils.Its exclusive formula, with a dry touch, is rapidly absorbed and leaves a protective moisturizing layer on your skin, with delicate sweet and comforting notes.Vegan formula.',
        price='25',
        qty="12",
        address='93 Oslo Court - Prince Albert Road',
        latitude=51.531710,
        longitude=-0.166780,
        postcode='NW87EW',
        category=Body_Care,
        user=valeriux
    )


    Product(
        name='Acai Soft Body Cream - Ekos',
        images=['https://www.naturabrasil.fr/product/image/large/50189140_1.jpg', 'https://images-na.ssl-images-amazon.com/images/I/61zY1PqPhSL._AC_UL320_SR214,320_.jpg'],
        description='A 30h body hydration with a sweet fragrance. Containing Açaí oil, rich in antioxidant, this body cream brings to the skin an immediate hydration that lasts up to 30 hours. Its light texture allows rapid absorption for immediate comfort. Your skin is soft, supple and delicately scented for long. Its light packaging with its resealable measuring cap is very practical: ideal for everyday use, it also fits in your weekend bag to offer you a beautiful journey',
        price='20',
        qty="4",
        address='44 Regent St, Soho, London',
        latitude=51.509730,
        longitude=-0.134760,
        postcode='W1B 5RA',
        category=Body_Care,
        user=doris
    )


    Product(
        name='Andibora Massage Oil - Ekos',
        images=['https://www.naturabrasil.fr/product/image/large/50136157_1.jpg', 'https://images-na.ssl-images-amazon.com/images/I/71a1lP6xecL._SY741_.jpg'],
        description='Thanks to its many therapeutic and care properties, the Andiroba tree is considered by Amazonian communities as their friend to help them survive in the beautiful and dangerous forest.Natura Ekos wants to make you discover these incredible properties in the care line Ekos Andiroba. This Ekos Andiroba Massage oil, enriched with Andiroba oil, with pain-softening and reparing properties, will enable you a soft and delicately perfumed massage, to help your body to recover strength. Vegan formula',
        price='12',
        qty="6",
        address='Fulham Palace Rd, London',
        latitude=51.487350,
        longitude=-0.221750,
        postcode='W6 8RF',
        category=Body_Care,
        user=doris
    )


    Product(
        name='Buriti Soft Body Cream',
        images=['https://www.naturabrasil.fr/product/image/large/50189143_1.jpg'],
        description='A 30h body hydration with a fruity fragrance. Enriched with Buriti oil, known for its antioxidant properties, this body cream brings 30 hours of hydration and leaves a protecting and fruity fragrant layer on skin. Your scented skin is protected against free radicals and finally ready to welcome the first sunrays. Its light packaging with its resealable measuring cap is very practical: ideal for everyday use, it also fits in your weekend bag to offer you a beautiful journey',
        price='12',
        qty="6",
        address='86 York St, Marylebone',
        latitude=51.520060,
        longitude=-0.161670,
        postcode='W1H 1QS',
        category=Body_Care,
        user=doris
    )


    Product(
        name='Cacau Soft Body Cream',
        images=['https://www.naturabrasil.fr/product/image/large/50189143_1.jpg'],
        description='Originating in Bahia, the cocoa tree needs shade to grow. Its cultivation thus helps to preserve the native forest. The beans contained in the fruit are extracted by the Cabruca community, dried, roasted and pressed to obtain the precious moisturising cocoa butter used in products from the Ekos Cacau range. Vegan formula',
        price='27',
        qty="3",
        address='52 Sloane St, Knightsbridge',
        latitude=51.497240,
        longitude=-0.158990,
        postcode='SW1X 9SP',
        category=Body_Care,
        user=valeriux
    )


    Product(
        name='Castanha Beautifying Dry Oil - Ekos',
        images=['https://www.naturabrasil.fr/product/image/large/50172119-huile-seche-ekos-castanha.jpg'],
        description='A wonderful and amazingly soft skin, with a delicate and comforting fragrance. The beautifying dry oil Ekos Castanha is enriched with Castanha oil and 100% vegetal oils.Its exclusive formula, with a dry touch, is rapidly absorbed and leaves a protective moisturizing layer on your skin, with delicate sweet and comforting notes.',
        price='25',
        qty="8",
        address='17 Grosvenor Pl, Belgravia',
        latitude=51.499980,
        longitude=-0.148760,
        postcode='SW1X 7HR',
        category=Body_Care,
        user=valeriux
    )
    Product(
            name='Castanha Soft Body Cream - Ekos',
            images=['https://www.naturabrasil.fr/product/image/large/50189142_1_1.jpg'],
            description='A 30h body hydration with a the delicate fragrance Enriched with Castanha oil, known for its intense emollient properties, this body cream provides the skin nutrition and 30 hours of hydration, reinforcing the cutaneous barrier and leaving a delicate scent. Its light packaging with its resealable.',
            price='20',
            qty="11",
            address='14-16 Cockspur St, St. James',
            latitude=51.507630,
            longitude=-0.143170,
            postcode='SW1Y 5BL',
            category=Body_Care,
            user=valeriux
        )


    Product(
            name='Castanha Soft Body Cream - Ekos',
            images=['https://www.naturabrasil.fr/product/image/large/50189721_1.jpg'],
            description='Enriched with Maracujá oil, this moisturizing body mousse with a light texture brings as soft as a delicious desert, offers you 24h hydration, leaving an incredible scent on your skin. Vegan formula',
            price='27',
            qty="21",
            address='3 Hans Cres, Knightsbridge, London',
            latitude=51.499241,
            longitude=-0.161460,
            postcode='SW1X 0LN',
            category=Body_Care,
            user=valeriux
        )


    Product(
            name='Ucuuba Body Butter Ekos',
            images=['https://www.naturabrasil.fr/product/image/large/50258104-beurre-hydratant-corps-ucuuba.jpg'],
            description='This skin-pampering body butter is blended with restorative Ucuuba butter gathered in the heart of Brazil, its unique rich but « dry » texture melts into the skin for a tempting, soft-to-the-touch experience, and up to 48 hours of lasting hydration.',
            price='27',
            qty="2",
            address='108 Queens Rd, Brighton',
            latitude=50.826099,
            longitude=-0.142310,
            postcode='BN1 3XF',
            category=Body_Care,
            user=valeriux
                )
    Product(
            name='Cacau Leg and Foot Cream - Ekos',
            images=['https://www.naturabrasil.fr/product/image/large/50186634_1_1.jpg'],
            description='Originating in Bahia, the cocoa tree needs shade to grow. Its cultivation thus helps to preserve the native forest. The beans contained in the fruit are extracted by the Cabruca community, dried, roasted and pressed to obtain the precious moisturising cocoa butter used in products from the Ekos Cacau range. Enriched with cocoa butter, this leg and foot care cream provides 30-hour moisturisation for dry areas, imparting a delicate perfume.',
            price='17.50',
            qty="2",
            address='42 Trafalgar St, Brighton',
            latitude=50.828289,
            longitude=-0.138600,
            postcode='BN1 4ED',
            category=Hand_Feet,
            user=valeriux
                )


    Product(
            name='Castanha Creamy Foot Balm - Ekos',
            images=['https://www.naturabrasil.fr/product/image/large/50205837_1_1.jpg'],
            description='Enriched with castanha (Brazil nut) oil, this pulp foot cream provides 24-hour moisturisation and nourishes the feet. It helps prevent dryness and strengthens the cutaneous barrier',
            price='15.50',
            qty="2",
            address='24 Kensington Gardens, Brighton',
            latitude=50.825730,
            longitude=-0.138900,
            postcode='BN1 4AL',
            category=Hand_Feet,
            user=valeriux
                )


    Product(
            name='Creamy Hand Balm Acaí Ekos',
            images=['https://www.naturabrasil.fr/product/image/large/50189144_1_1.jpg'],
            description='Enriched with Açaí oil, with emollient properties, this creamy hand balm brings up to 24 hours of hydration and leaves the skin delicately fragrant. Its mini format is ideal for a quick hydration all day long.',
            price='15.50',
            qty="2",
            address='12a Ship St Gardens, Brighton',
            latitude=50.821450,
            longitude=-0.142430,
            postcode='BN1 4AL',
            category=Hand_Feet,
            user=doris
                )


    Product(
            name='Buriti Conditioner for dull coloured hair - Ekos',
            images=['https://www.naturabrasil.fr/product/image/large/50189144_1_1.jpg'],
            description='Beautiful palm tree of the Cerrado region, in the center of Brazil, the Buriti gives a fruit with multiple benefits for the local people. From this fruit, an amber coloured oil is extracted and used traditionally for skin and hair care.With Buriti oil, Ekos Buriti hair care products* leave your hair colour beautifully shiny and your hair protected from the UV rays of the sun.This express care conditioner is perfectly adapted to take care of coloured hair and reboost the shine of dull hair. Its rich formula is as intense as a deep hair mask and at the same time acts as quickly as a conditioner. Its untangles your hair rapidly and leaves it soft, light and naturally shiny. Formulated without paraben.Vegan formula',
            price='16',
            qty="4",
            address='17-18 Dukes Ln, Brighton',
            latitude=50.821999,
            longitude=-0.142350,
            postcode='BN1 1BG',
            category=Hand_Feet,
            user=doris
                )

    db.commit()
