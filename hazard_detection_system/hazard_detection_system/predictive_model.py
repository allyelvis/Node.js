import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestClassifier

def train_predictive_model(data):
    features = data[['temperature', 'humidity', 'pressure']]
    labels = data['hazard_level']
    
    X_train, X_test, y_train, y_test = train_test_split(features, labels, test_size=0.2, random_state=42)
    
    model = RandomForestClassifier()
    model.fit(X_train, y_train)
    
    return model

# Example usage
if __name__ == "__main__":
    from collect_data import collect_data
    
    data = collect_data()
    model = train_predictive_model(data)
    print('Model trained!')

    # Predict solutions (for illustration, predicting hazard level as a solution)
    predictions = model.predict(data[['temperature', 'humidity', 'pressure']])
    data['predicted_solution'] = predictions
    print(data.head())
