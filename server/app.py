from flask import Flask, jsonify, make_response, request
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from flask_cors import CORS
from flask import Flask
from flask_jwt_extended import JWTManager


# Create a SQLAlchemy object named 'db' to represent the database
db = SQLAlchemy()

# Create a Flask application instance
app = Flask(__name__)

# Configure the Flask app to use a SQLite database named 'app.db'
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///app.db'

# Disable Flask-SQLAlchemy's modification tracking for better performance
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

app.config['JWT_SECRET_KEY'] = 'your_secret_key_here'
jwt = JWTManager(app)

# Create a migration object associated with the Flask app
migrate = Migrate(app, db)

db.init_app(app)

# Enable CORS for all routes on the Flask app
CORS(app)
# Define a route for the root URL, returning a welcome message
@app.route('/')
def index():
    return 'Welcome to the Flask API!'

# Define a route for the about page, rendering the 'about.html' template
@app.route('/about', methods=['GET'])
def about():
    return 'This is the about page!'

# Define a route for the contact page, rendering the 'contact.html' template
@app.route('/contact', methods=['GET'])
def contact():
    return 'This is the contact page!'

# Run the Flask app in debug mode if the script is executed directly
if __name__ == '__main__':
    app.run(debug=True)
