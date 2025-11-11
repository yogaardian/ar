from datetime import datetime
from flask import Flask, request, jsonify

app = Flask(__name__)

@app.get("/hello")
def hello():
    name = request.args.get("name", "World")
    return jsonify(message=f"Hello, {name}!")

@app.get("/status")
def status():
    return jsonify(
        app="prak1",
        version="1.0",
        server_time=datetime.now().isoformat()
    )

if __name__ == "__main__":
    app.run(debug=True)

@app.post("/students")
def create_student():
    # Pastikan Body Bertipe JSON
    payload = request.get_json(silent=True)
    if payload is None:
        return jsonify(error="Invalid or missing JSON body"), 400

    nim = payload.get("nim")
    name = payload.get("name")

    # Validasi Sederhana
    if not nim or not name:
        return jsonify(error="Fields 'nim' and 'name' are required"), 422
    if nim in students:
        return jsonify(error="NIM already exists"), 409
    
    students[nim] = {"nim": nim, "name": name}
    return jsonify(student[nim]), 201 # 201 Created

@app.get("/students")
def list_students():
    return jsonify(list(students.values()))

@app.get("/students/<nim>")
def get_student(nim):
    data = students.get(nim)
    if not data:
        return jsonify(error="Student not found"), 40
    return jsonify(data)

if __name__ == "__main__":
    app.run(debug=True)