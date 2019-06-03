from flask import Blueprint, request, jsonify, abort, g
from pony.orm import db_session
from marshmallow import ValidationError
from app import db
from models.Product import Product, ProductSchema
from lib.secure_route import secure_route

router = Blueprint(__name__, 'products')

@router.route('/products', methods=['GET'])
@db_session
def index():
    schema = ProductSchema(many=True)
    products = Product.select()
    return schema.dumps(products)

@router.route('/products', methods=['POST'])
@db_session
@secure_route
def create():
    schema = ProductSchema()

    try:
        data = schema.load(request.get_json())
        product = Product(**data, user=g.current_user)
        db.commit()
    except ValidationError as err:
        return jsonify({'message': 'Validation failed', 'errors': err.messages}), 422
    return schema.dumps(product), 201

@router.route('/products/<int:product_id>', methods=['GET'])
@db_session
def show(product_id):
    schema = ProductSchema()
    product = Product.get(id=product_id)

    if not product:
        abort(404)

    return schema.dumps(product)

@router.route('/products/<int:product_id>', methods=['PUT'])
@db_session
@secure_route
def update(product_id):
    schema = ProductSchema()
    product = Product.get(id=product_id)


    if not product:
        abort(404)

    try:
        data = schema.load(request.get_json())
        product.set(**data)
        db.commit()
    except ValidationError as err:
        return jsonify({'message': 'Validation failed', 'errors': err.messages}), 422

    return schema.dumps(product)


@router.route('/products/<int:product_id>', methods=['DELETE'])
@db_session
@secure_route
def delete(product_id):
    product = Product.get(id=product_id)

    if not product:
        abort(404)

    product.delete()
    db.commit()

    return '', 204
