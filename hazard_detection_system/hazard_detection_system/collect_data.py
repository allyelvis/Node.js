import pandas as pd
import numpy as np

def collect_data():
    data = {
        'temperature': np.random.uniform(20, 100, 100),
        'humidity': np.random.uniform(10, 90, 100),
        'pressure': np.random.uniform(950, 1050, 100),
        'hazard_level': np.random.choice([0, 1], 100)  # 0 = No Hazard, 1 = Hazard
    }
    return pd.DataFrame(data)

data = collect_data()
print(data.head())
