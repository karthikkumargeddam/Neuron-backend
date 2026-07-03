import requests, json, sys
url = "http://localhost:8000/generate"
payload = {"prompt": "Hello world", "max_tokens": 10}
try:
    resp = requests.post(url, json=payload, timeout=30)
    print("Status:", resp.status_code)
    print("Response:", resp.text)
except Exception as e:
    print("Error:", e)
