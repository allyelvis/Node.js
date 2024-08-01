# Hazard Detection System

## Setup

1. Navigate to the project directory:
    `cd hazard_detection_system`

2. Activate the virtual environment:
    `source venv/bin/activate`

3. To collect data, run:
    `python collect_data.py`

4. To detect hazards, run:
    `python detect_hazard.py`

5. To send notifications (requires Twilio credentials), run:
    `python send_notification.py`

6. To train the predictive model, run:
    `python predictive_model.py`

7. To start the Flask web server, run:
    `python app.py`
    
8. Use endpoints `/detect` and `/predict` to detect hazards and predict solutions.
