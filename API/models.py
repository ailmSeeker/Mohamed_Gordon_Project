from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import MetaData

from sqlalchemy_serializer import SerializerMixin

metadata = MetaData(naming_convention={
    "fk": "fk_%(table_name)s_%(column_0_name)s_%(referred_table_name)s",
})

db = SQLAlchemy(metadata=metadata)

class Site(db.Model, SerializerMixin):
    __tablename__ = 'site'

    id = db.Column(db.Integer, primary_key=True)
    tag_line = db.Column(db.String, unique=True)
    header = db.Column(db.String)
    card1 = db.Column(db.String)
    card2 = db.Column(db.String)
    card3 = db.Column(db.String)

    def __repr__(self):
        return f'<{self.id} for {self.tag_line}>'

