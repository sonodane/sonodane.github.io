from flask import Flask, render_template, request
import requests

app = Flask(__name__)

API_KEY = "TUAPIKEY"  # Sostituisci con la tua API Key di OpenWeatherMap

@app.route("/", methods=["GET", "POST"])
def home():
    weather_data = None
    error = None

    if request.method == "POST":
        city = request.form.get("city")
        if city:
            url = f"http://api.openweathermap.org/data/2.5/weather?q={city}&appid={API_KEY}&units=metric&lang=it"
            response = requests.get(url)

            if response.status_code == 200:
                data = response.json()
                weather_data = {
                    "city": data["name"],
                    "temperature": data["main"]["temp"],
                    "description": data["weather"][0]["description"],
                    "humidity": data["main"]["humidity"],
                    "wind": data["wind"]["speed"],
                }
            else:
                error = "Città non trovata. Riprova."

    return render_template("index.html", weather=weather_data, error=error)

if __name__ == "__main__":
    app.run(debug=True)
