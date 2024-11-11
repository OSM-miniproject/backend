import joblib

# Load the model
ocd_percentage_model = joblib.load('model/models/ocd_percentage_model.joblib')

# If it's a linear model (like LinearRegression, LogisticRegression, etc.)
print("Model feature names:", ocd_percentage_model.feature_names_in_)
