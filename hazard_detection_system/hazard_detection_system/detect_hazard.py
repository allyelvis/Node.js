import pandas as pd

def detect_hazard(data):
    data['hazard_detected'] = (data['temperature'] > 80) & (data['humidity'] < 20)
    return data

# Example usage
if __name__ == "__main__":
    from collect_data import collect_data
    data = collect_data()
    data = detect_hazard(data)
    print(data.head())
