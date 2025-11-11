# D:\BE-ORATORIO\app\extensions.py

from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate

# Buat instance-nya saja, TANPA app
db = SQLAlchemy()
migrate = Migrate()