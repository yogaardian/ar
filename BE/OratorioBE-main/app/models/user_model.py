from app.extensions import db
from werkzeug.security import generate_password_hash, check_password_hash
class User(db.Model):
    __tablename__ = "Users"

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password_hash = db.Column(db.String(255), nullable=False) # Kolom hash Password

    #Method untuk menyimpan password dalam bentuk hash
    def set_password(self, password):
        self.password_hash = generate_password_hash(password)

    # Method untuk verifikasi password saat login
    def check_password(self, password):
        return check_password_hash(self.password_hash, password)

    # Method untuk konversi data ke dictionary (tanpa password)
    def to_dict(self):
        return{
            "id": self.id,
            "name": self.name,
            "email": self.email
        }