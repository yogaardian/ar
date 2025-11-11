from app.extensions import db

class Destination(db.Model):
    __tablename__ = 'destinations'

    destination_id = db.Column(db.Integer, primary_key=True)
    destination_name = db.Column(db.String(150))
    location = db.Column(db.String(150))
    description = db.Column(db.Text)
    image_url = db.Column(db.String(255))
    total_visits = db.Column(db.Integer)
    recent_visits = db.Column(db.Integer)
    rating = db.Column(db.Float)
    reviews_count = db.Column(db.Integer)
    created_at = db.Column(db.DateTime)

    def to_dict(self):
        return {
            "destination_id": self.destination_id,
            "destination_name": self.destination_name,
            "location": self.location,
            "description": self.description,
            "image_url": self.image_url,
            "total_visits": self.total_visits,
            "recent_visits": self.recent_visits,
            "rating": self.rating,
            "reviews_count": self.reviews_count,
            "created_at": self.created_at
        }
