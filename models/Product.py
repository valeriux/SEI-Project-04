from app import db
from pony.orm import Required, Set
from marshmallow import Schema, fields, post_load
from .Category import Category

class Product(db.Entity):
    name = Required(str)
    image = Required(str)
    description = Required(str)
    price = Required(float)
    Qty = Required(int)
    categories = Set('Category')
    user = Required('User')


class ProductSchema(Schema):
    id = fields.Int(dump_only=True)
    name = fields.Str(required=True)
    image = fields.Str(required=True)
    description = fields.Str(required=True)
    price = fields.Float(required=True)
    Qty = fields.Int(required=True)
    categories = fields.Nested('CategorySchema', many=True, exclude=('products',), dump_only=True)
    category_ids = fields.List(fields.Int(), load_only=True)
    user = fields.Nested('UserSchema', exclude=('email', 'products'))


    @post_load
    def load_categories(self, data):
        data['categories'] = [Category.get(id=cat_id) for cat_id in data['category_ids']]
        del data['category_ids']

        return data
