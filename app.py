from flask import Flask, request, jsonify
from flask_cors import CORS  # Import CORS
from model.model import predict_ocd
import os

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

@app.route('/predict', methods=['POST'])
def predict():
    data = request.get_json()
    if not data:
        return jsonify({'error': 'Invalid input'}), 400
    print(f"Received input data: {data}")
    try:
        severity, percentage = predict_ocd(data)
    except Exception as e:
        return jsonify({'error': f'Error predicting OCD: {str(e)}'}), 500
    return jsonify({'predicted_severity': severity, 'predicted_percentage': percentage})

if __name__ == '__main__':
    app.run(debug=True)

