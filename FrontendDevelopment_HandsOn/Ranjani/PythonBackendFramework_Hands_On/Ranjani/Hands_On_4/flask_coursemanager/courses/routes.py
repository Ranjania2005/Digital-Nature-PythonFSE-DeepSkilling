from flask import Blueprint, jsonify, request

courses_bp = Blueprint(
    "courses",
    __name__,
    url_prefix="/api/courses"
)


@courses_bp.route("/", methods=["GET"])
def get_courses():
    return jsonify([])


@courses_bp.route("/", methods=["POST"])
def add_course():
    data = request.get_json()

    # Check if request is JSON
    if data is None:
        return jsonify({"error": "Request must be JSON"}), 400

    # Check required fields
    required_fields = ["name", "code", "credits"]

    for field in required_fields:
        if field not in data:
            return jsonify({"error": f"{field} is required"}), 400

    # Return the received data
    return jsonify(data), 201