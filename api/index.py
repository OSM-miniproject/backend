from flask import Flask, request, jsonify
from flask_cors import CORS  # Import CORS
from .predictions import make_prediction

app = Flask(__name__)

# Enable CORS for all routes and only allow the frontend origin
CORS(app, origins=["http://localhost:3000"])

@app.route('/predict', methods=['POST'])
def predict():
    try:
        data = request.get_json()
        input_data = pd.DataFrame([data])  # Convert the input data to a DataFrame
        result = make_prediction(input_data)  # Run prediction
        return jsonify({'prediction': result})  # Return the prediction result as JSON
    except Exception as e:
        return jsonify({'error': str(e)}), 400

if __name__ == '__main__':
    app.run(debug=True)
