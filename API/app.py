#!/usr/bin/env python

from flask import Flask, jsonify, request,make_response
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate

from models import db, Site
app = Flask(__name__)

app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///earth.sqlite3'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.json.compact = False

migrate = Migrate(app, db)

db.init_app(app)

def seed():
    test = Site(
        id = 1,
        tag_line = 'The world needs more green', 
        header = 'this is a header',
        card1 = 'this is a card', 
        card2 = 'this is another card',
        card3 = 'this is third card',
    )

    db.session.add(test)
    db.session.commit()


@app.route('/')
def index():
    return 'this is index' 

@app.route('/stuff')
def tag_line():
    tag_line_get = db.session.execute(db.select(Site).filter_by(id=1)).scalar_one()
    
    tag_dict = tag_line_get.to_dict()
    
    response = make_response(
        jsonify(tag_dict),
        200
    )

    return response

if __name__ == '__main__':
    app.run(port=5555, debug=True)
