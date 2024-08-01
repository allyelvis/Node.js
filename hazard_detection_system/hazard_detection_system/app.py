from flask import Flask, request, jsonify
import pandas as pd
from detect_hazard import detect_hazard
from predictive_model import train_predictive_model

app = Flask(__name__)

# Load the model (assumes model has been trained and saved previously)
data = pd.read_csv('data.csv')  # Assuming you save your data in a CSV file
model = train_predictive_model(data)

@app.route('/detect', methods=['POST'])
def detect():
    content = request.json
    df = pd.DataFrame(content)
    detected_data = detect_hazard(df)
    return jsonify(detected_data.to_dict(orient='records'))

@app.route('/predict', methods=['POST'])
def predict():
    content = request.json
    df = pd.DataFrame(content)
    predictions = model.predict(df[['temperature', 'humidity', 'pressure']])
    df['predicted_solution'] = predictions
    return jsonify(df.to_dict(orient='records'))

if __name__ == '__main__':
    app.run(debug=True)
