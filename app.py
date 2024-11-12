from flask import Flask, request, jsonify
from flask_cors import CORS  # Import CORS for cross-origin requests
from model.model import predict_ocd  # Import the prediction function
import os

# Create Flask app
app = Flask(__name__)

# Enable CORS to allow frontend requests from http://localhost:3000
CORS(app, origins=["http://localhost:3000"])

@app.route('/predict', methods=['POST'])
def predict():
    """
    Predict OCD severity and percentage from the input data.
    """
    try:
        # Parse JSON data from the request
        data = request.get_json()

        if not data:
            return jsonify({'error': 'Invalid input data'}), 400
        
        # Log the received input data (for debugging)
        print(f"Received input data: {data}")

        # Call the prediction function to get the results
        severity, percentage = predict_ocd(data)

        # Return the prediction results as JSON
        return jsonify({'predicted_severity': severity, 'predicted_percentage': percentage})

    except Exception as e:
        # Return an error message if any exception occurs
        return jsonify({'error': f'Error predicting OCD: {str(e)}'}), 500

if __name__ == '__main__':
    # Run the app
    app.run(debug=True)
