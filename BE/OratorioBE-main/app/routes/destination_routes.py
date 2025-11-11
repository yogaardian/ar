from flask import Blueprint, jsonify
from app.models.destination_model import Destination
from app.extensions import db

destination_bp = Blueprint('destination_bp', __name__)

# Endpoint: GET /api/destinations → Ambil semua destinasi
@destination_bp.route('/api/destinations', methods=['GET'])
def get_destinations():
    destinations = Destination.query.all()
    data = [d.to_dict() for d in destinations]
    return jsonify(data), 200


# Endpoint: GET /api/destinations/<id> → Ambil destinasi berdasarkan ID
@destination_bp.route('/api/destinations/<int:id>', methods=['GET'])
def get_destination_by_id(id):
    destination = Destination.query.get(id)
    if destination:
        return jsonify(destination.to_dict()), 200
    return jsonify({"error": "Destination not found"}), 404
