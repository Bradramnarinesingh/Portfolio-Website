document.addEventListener("DOMContentLoaded", function () {
    fetchIPBasedLocation();
    // Other initialization code, if needed
});

function fetchIPBasedLocation() {
    fetch("https://ipapi.co/json/")
        .then((response) => response.json())
        .then((data) => {
            fetchWeatherData({
                coords: {
                    latitude: data.latitude,
                    longitude: data.longitude,
                },
            });
        })
        .catch((error) => {
            console.error("Error fetching IP location:", error);
            document.getElementById("weather-widget").textContent = "Error loading weather information.";
        });
}

function fetchWeatherData(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const apiKey = "4ba1b27a75bc489488215434240102"; // Replace with your actual API key
    const url = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${latitude},${longitude}`;

    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            displayWeather(data);
        })
        .catch((error) => {
            console.error("Error fetching weather data:", error);
            document.getElementById("weather-widget").textContent = "Error loading weather information.";
        });
}

// Function to display weather data
function displayWeather(data) {
    const temperature = data.current.temp_c;
    const condition = data.current.condition.text;
    const locationName = data.location.name;
    const weatherIconHtml = getWeatherIconHtml(condition);

    document.getElementById("weather-widget").innerHTML = `
  ${weatherIconHtml}
  <p>${temperature}°C</p>
  <p>${condition}</p>
  <p>${locationName}</p>
`;
}

// Function to get the appropriate weather icon HTML
function getWeatherIconHtml(condition) {
    const conditionMap = {
        Sunny: '<i class="fa-solid fa-sun" style="font-size: 40px;"></i>',
        Clear:
            '<i class="fa-solid fa-moon-stars" style="font-size: 40px;"></i>',
        "Partly cloudy":
            '<i class="fa-solid fa-cloud-sun" style="font-size: 40px;"></i>',
        Cloudy:
            '<i class="fa-solid fa-clouds" style="font-size: 40px;"></i>',
        Overcast:
            '<i class="fa-solid fa-clouds-sun" style="font-size: 40px;"></i>',
        Mist: '<i class="fa-solid fa-fog" style="font-size: 40px;"></i>',
        "Patchy rain possible":
            '<i class="fa-solid fa-cloud-drizzle" style="font-size: 40px;"></i>',
        "Patchy snow possible":
            '<i class="fa-solid fa-cloud-snow" style="font-size: 40px;"></i>',
        "Patchy sleet possible":
            '<i class="fa-solid fa-cloud-hail" style="font-size: 40px;"></i>',
        "Patchy freezing drizzle possible":
            '<i class="fa-solid fa-cloud-hail-mixed" style="font-size: 40px;"></i>',
        "Thundery outbreaks possible":
            '<i class="fa-solid fa-thunderstorm" style="font-size: 40px;"></i>',
        "Blowing snow":
            '<i class="fa-solid fa-wind" style="font-size: 40px;"></i><i class="fa-solid fa-snowflakes" style="font-size: 40px;"></i>',
        Blizzard:
            '<i class="fa-solid fa-snow-blowing" style="font-size: 40px;"></i>',
        Fog: '<i class="fa-solid fa-fog" style="font-size: 40px;"></i>',
        "Freezing fog":
            '<i class="fa-solid fa-fog" style="font-size: 40px;"></i><i class="fa-solid fa-temperature-frigid" style="font-size: 40px;"></i>',
        "Patchy light drizzle":
            '<i class="fa-solid fa-cloud-drizzle" style="font-size: 40px;"></i>',
        "Light drizzle":
            '<i class="fa-solid fa-cloud-drizzle" style="font-size: 40px;"></i>',
        "Freezing drizzle":
            '<i class="fa-solid fa-cloud-hail-mixed" style="font-size: 40px;"></i>',
        "Heavy freezing drizzle":
            '<i class="fa-solid fa-cloud-hail-mixed" style="font-size: 40px;"></i>',
        "Patchy light rain":
            '<i class="fa-solid fa-cloud-rain" style="font-size: 40px;"></i>',
        "Light rain":
            '<i class="fa-solid fa-cloud-rain" style="font-size: 40px;"></i>',
        "Moderate rain at times":
            '<i class="fa-solid fa-cloud-showers-heavy" style="font-size: 40px;"></i>',
        "Moderate rain":
            '<i class="fa-solid fa-cloud-showers-heavy" style="font-size: 40px;"></i>',
        "Heavy rain at times":
            '<i class="fa-solid fa-cloud-showers-heavy" style="font-size: 40px;"></i>',
        "Heavy rain":
            '<i class="fa-solid fa-cloud-showers-heavy" style="font-size: 40px;"></i>',
        "Light freezing rain":
            '<i class="fa-solid fa-cloud-hail-mixed" style="font-size: 40px;"></i>',
        "Moderate or heavy freezing rain":
            '<i class="fa-solid fa-cloud-hail-mixed" style="font-size: 40px;"></i>',
        "Light sleet":
            '<i class="fa-solid fa-cloud-hail" style="font-size: 40px;"></i>',
        "Moderate or heavy sleet":
            '<i class="fa-solid fa-cloud-hail" style="font-size: 40px;"></i>',
        "Patchy light snow":
            '<i class="fa-solid fa-cloud-snow" style="font-size: 40px;"></i>',
        "Light snow":
            '<i class="fa-solid fa-cloud-snow" style="font-size: 40px;"></i>',
        "Patchy moderate snow":
            '<i class="fa-solid fa-cloud-snow" style="font-size: 40px;"></i>',
        "Moderate snow":
            '<i class="fa-solid fa-cloud-snow" style="font-size: 40px;"></i>',
        "Patchy heavy snow":
            '<i class="fa-solid fa-cloud-snow" style="font-size: 40px;"></i>',
        "Heavy snow":
            '<i class="fa-solid fa-cloud-snow" style="font-size: 40px;"></i>',
        "Ice pellets":
            '<i class="fa-solid fa-cloud-hail-mixed" style="font-size: 40px;"></i>',
        "Light rain shower":
            '<i class="fa-solid fa-cloud-showers-heavy" style="font-size: 40px;"></i>',
        "Moderate or heavy rain shower":
            '<i class="fa-solid fa-cloud-showers-heavy" style="font-size: 40px;"></i>',
        "Torrential rain shower":
            '<i class="fa-solid fa-cloud-showers-heavy" style="font-size: 40px;"></i>',
        "Light sleet showers":
            '<i class="fa-solid fa-cloud-hail" style="font-size: 40px;"></i>',
        "Moderate or heavy sleet showers":
            '<i class="fa-solid fa-cloud-hail" style="font-size: 40px;"></i>',
        "Light snow showers":
            '<i class="fa-solid fa-cloud-snow" style="font-size: 40px;"></i>',
        "Moderate or heavy snow showers":
            '<i class="fa-solid fa-cloud-snow" style="font-size: 40px;"></i>',
        "Light showers of ice pellets":
            '<i class="fa-solid fa-cloud-hail-mixed" style="font-size: 40px;"></i>',
        "Moderate or heavy showers of ice pellets":
            '<i class="fa-solid fa-cloud-hail-mixed" style="font-size: 40px;"></i>',
        "Patchy light rain with thunder":
            '<i class="fa-solid fa-thunderstorm" style="font-size: 40px;"></i>',
        "Moderate or heavy rain with thunder":
            '<i class="fa-solid fa-thunderstorm" style="font-size: 40px;"></i>',
        "Patchy light snow with thunder":
            '<i class="fa-solid fa-thunderstorm" style="font-size: 40px;"></i><i class="fa-solid fa-snowflakes" style="font-size: 40px;"></i>',
        "Moderate or heavy snow with thunder":
            '<i class="fa-solid fa-thunderstorm" style="font-size: 40px;"></i><i class="fa-solid fa-snowflakes" style="font-size: 40px;"></i>',
    };

    return (
        conditionMap[condition] ||
        '<i class="fa-solid fa-circle-question" style="font-size: 50px;"></i>'
    ); // Default icon
}

// Function to show an error message if there's a problem getting the location
function showError(error) {
    switch (error.code) {
        case error.PERMISSION_DENIED:
            document.getElementById("weather-widget").textContent =
                "User denied the request for Geolocation.";
            break;
        case error.POSITION_UNAVAILABLE:
            document.getElementById("weather-widget").textContent =
                "Location information is unavailable.";
            break;
        case error.TIMEOUT:
            document.getElementById("weather-widget").textContent =
                "The request to get user location timed out.";
            break;
        case error.UNKNOWN_ERROR:
            document.getElementById("weather-widget").textContent =
                "An unknown error occurred.";
            break;
    }
    // Disable further clicks after an error
    document.getElementById("weather-widget").onclick = null;
}