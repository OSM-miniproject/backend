import joblib
import pandas as pd

# Load the trained model and any encoders used in training
model = joblib.load('backend/models/ocd_model.joblib')

# Predefined mappings (assuming these were known during training)
# Adjust the mappings based on what was used during the model's training phase
gender_mapping = {'Female': 0, 'Male': 1}  # Example, update as needed
diagnosis_mapping = {'No': 0, 'Yes': 1, 'Maybe': 2}  # Example, update as needed

# Function to make predictions based on input data
def make_prediction(input_data):
    # Apply consistent encoding
    input_data['Gender'] = input_data['Gender'].map(gender_mapping).fillna(0).astype(int)
    input_data['Previous Diagnoses'] = input_data['Previous Diagnoses'].map(diagnosis_mapping).fillna(0).astype(int)
    input_data['Obsession Type'] = input_data['Obsession Type'].map(diagnosis_mapping).fillna(0).astype(int)
    input_data['Compulsion Type'] = input_data['Compulsion Type'].map(diagnosis_mapping).fillna(0).astype(int)
    input_data['Depression Diagnosis'] = input_data['Depression Diagnosis'].map(diagnosis_mapping).fillna(0).astype(int)
    input_data['Anxiety Diagnosis'] = input_data['Anxiety Diagnosis'].map(diagnosis_mapping).fillna(0).astype(int)

    # Ensure the input data columns match model training columns
    input_data = input_data[model.feature_names_in_]

    # Make the prediction
    prediction = model.predict(input_data)
    return "Yes" if prediction[0] == 1 else "No"
