import joblib
import pandas as pd
from flask import Flask, request, jsonify
from flask_cors import CORS
from sklearn.preprocessing import LabelEncoder

app = Flask(__name__)
CORS(app)

# Load the trained model
model = joblib.load('D:\\Acad\\TY\\Labs\\MP-1\\reps\\backend\\models\\ocd_model.joblib')

# Label encoder for categorical features
label_encoder = LabelEncoder()

@app.route('/api/predict', methods=['POST'])
def predict():
    try:
        data = request.json
        print("Received data:", data)

        answers = data.get('answers', {})
        if not answers:
            raise ValueError("No answers found in the request data.")

        # Transform answers with correct names and order
        transformed_answers = {
            'Age': answers.get('Age', 0),
            'Gender': answers.get('Gender', 'Female'),  # Default values as needed
            'Previous Diagnoses': 0,
            'Obsession Type': 0,
            'Compulsion Type': answers.get('CompulsionType', 0),
            'Depression Diagnosis': 0,
            'Anxiety Diagnosis': answers.get('AnxietyDiagnosis', 0)
        }

        # Apply label encoding to categorical columns like 'Gender'
        transformed_answers['Gender'] = label_encoder.fit_transform([transformed_answers['Gender']])[0]

        # Convert to DataFrame in correct order
        input_data = pd.DataFrame([transformed_answers])[['Age', 'Gender', 'Previous Diagnoses', 
                                                           'Obsession Type', 'Compulsion Type', 
                                                           'Depression Diagnosis', 'Anxiety Diagnosis']]

        # Prediction
        prediction = model.predict(input_data)
        return jsonify({'prediction': prediction.tolist()})

    except Exception as e:
        print("Error in prediction:", str(e))
        return jsonify({'error': str(e)}), 400

if __name__ == '__main__':
    app.run(debug=True)
