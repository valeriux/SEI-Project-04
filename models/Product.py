from app import db
from pony.orm import Required, Optional, StrArray
from marshmallow import Schema, fields, post_load
from .Category import Category

class Product(db.Entity):
    name = Required(str)
    images = Optional(StrArray)
    description = Required(str)
    price = Required(float)
    qty = Required(int)
    address = Required(str)
    postcode = Required(str)
    latitude = Required(float)
    longitude = Required(float)
    category = Required('Category')
    user = Required('User')

class ProductSchema(Schema):
    id = fields.Int(dump_only=True)
    name = fields.Str(required=True)
    images = fields.List(fields.Str)
    description = fields.Str(required=True)
    price = fields.Float(required=True)
    qty = fields.Int(required=True)
    address = fields.Str(required=True)
    postcode = fields.Str(required=True)
    latitude = fields.Float()
    longitude = fields.Float()
    category = fields.Nested('CategorySchema', exclude=('products',), dump_only=True)
    category_id = fields.Int(load_only=True)
    user = fields.Nested('UserSchema', exclude=('email', 'products'))


    @post_load
    def load_category(self, data):
        data['category'] = Category.get(id=data['category_id'])
        del data['category_id']

        return data
