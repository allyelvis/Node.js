from twilio.rest import Client

def send_notification(message):
    account_sid = 'your_account_sid'
    auth_token = 'your_auth_token'
    client = Client(account_sid, auth_token)
    
    message = client.messages.create(
        body=message,
        from_='+1234567890',  # Your Twilio number
        to='+0987654321'  # User's phone number
    )
    print(message.sid)

# Example notification
if __name__ == "__main__":
    from detect_hazard import detect_hazard
    from collect_data import collect_data
    
    data = collect_data()
    data = detect_hazard(data)
    if data['hazard_detected'].any():
        send_notification('Hazard detected! Please take necessary precautions.')
