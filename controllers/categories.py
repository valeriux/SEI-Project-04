from flask import Blueprint, request, jsonify, abort
from pony.orm import db_session
from marshmallow import ValidationError
from app import db
from models.Category import Category, CategorySchema

router = Blueprint(__name__, 'categories')

@router.route('/categories', methods=['GET'])
@db_session
def index():
    schema = CategorySchema(many=True)
    categories = Category.select()
    return schema.dumps(categories)

@router.route('/categories', methods=['POST'])
@db_session
def create():
    schema = CategorySchema()
    try:
        data = schema.load(request.get_json())
        category = Category(**data)
        db.commit()
    except ValidationError as err:
        return jsonify({'message': 'Validation failed', 'errors': err.messages}), 422

    return schema.dumps(category), 201


@router.route('/categories/<int:category_id>', methods=['GET'])
@db_session
def show(category_id):
    schema = CategorySchema()
    category = Category.get(id=category_id)

    if not category:
        abort(404)


    return schema.dumps(category)


@router.route('/categories/<int:category_id>', methods=['PUT'])
@db_session
def update(category_id):
    schema = CategorySchema()
    category = Category.get(id=category_id)

    if not category:
        abort(404)

    try:
        data = schema.load(request.get_json())
        category.set(**data)
        db.commit()
    except ValidationError as err:
        return jsonify({'message': 'Validation failed', 'errors': err.messages}), 422

    return schema.dumps(category)


@router.route('/categories/<int:category_id>', methods=['DELETE'])
@db_session
def delete(category_id):
    category = Category.get(id=category_id)

    if not category:
        abort(404)

    category.delete()
    db.commit()

    return '', 204
