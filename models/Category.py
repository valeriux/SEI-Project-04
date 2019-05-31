from app import db
from pony.orm import Required, Set
from marshmallow import Schema, fields

class Category(db.Entity):
    name = Required(str)
    products = Set('Product')

class CategorySchema(Schema):
    id = fields.Int(dump_only=True)
    name = fields.Str(required=True)
    products = fields.Nested('ProductSchema', many=True, exclude=('categories',), dump_only=True)
