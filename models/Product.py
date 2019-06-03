from app import db
from pony.orm import Required
from marshmallow import Schema, fields, post_load
from .Category import Category

class Product(db.Entity):
    name = Required(str)
    image = Required(str)
    description = Required(str)
    price = Required(float)
    Qty = Required(int)
    address = Required(str)
    postcode = Required(str)
    latitude = Required(float)
    longitude = Required(float)
    categories = Required('Category')
    user = Required('User')


class ProductSchema(Schema):
    id = fields.Int(dump_only=True)
    name = fields.Str(required=True)
    image = fields.Str(required=True)
    description = fields.Str(required=True)
    price = fields.Float(required=True)
    Qty = fields.Int(required=True)
    address = fields.Str(required=True)
    postcode = fields.Str(required=True)
    latitude = fields.Float(required=True)
    longitude = fields.Float(required=True)
    category = fields.Nested('CategorySchema', many=True, exclude=('products',), dump_only=True)
    category_ids = fields.Int(load_only=True)
    user = fields.Nested('UserSchema', exclude=('email', 'products'))


    @post_load
    def load_category(self, data):
        data['category'] = Category.get(id=data['category_id'])
        del data['category_id']

        return data
