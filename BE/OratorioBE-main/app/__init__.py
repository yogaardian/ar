from flask import Flask
from app.extensions import db, migrate
from app.config import Config
from app.routes.user_routes import user_bp
from app.routes.destination_routes import destination_bp

def create_app():
    app = Flask(__name__)
    app.config.from_object(Config)

    # Inisialisasi database dan migrasi
    db.init_app(app)
    migrate.init_app(app, db)

    # Register blueprint
    from app.routes.user_routes import user_bp
    app.register_blueprint(user_bp, url_prefix='/api/users')

    return app