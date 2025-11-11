from flask import Blueprint, jsonify, request
from app.models.user_model import User
from app.extensions import db

user_bp = Blueprint('user_bp', __name__)

# CREATE (POST)
@user_bp.route('/', methods=['POST'])
def create_user():
    data = request.get_json()
    new_user = User(name=data['name'], email=data['email'])
    db.session.add(new_user)
    db.session.commit()
    return jsonify({"message": "User created successfully", "user": new_user.to_dict()}), 201

# READ ALL (GET)
@user_bp.route('/', methods=['GET'])
def get_users():
    users = User.query.all()
    return jsonify([user.to_dict() for user in users])