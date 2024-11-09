# backend/api/index.py

from flask import Flask, request, jsonify
from .predictions import make_prediction

app = Flask(__name__)

@app.route('/predict', methods=['POST'])
def predict():
    try:
        data = request.get_json()  # Get the input data from the request
        input_data = pd.DataFrame([data])  # Convert to a DataFrame

        # Make prediction using the model
        result = make_prediction(input_data)

        # Return the result as a JSON response
        return jsonify({'prediction': result})

    except Exception as e:
        return jsonify({'error': str(e)}), 400


if __name__ == '__main__':
    app.run(debug=True)
