$(function () {
    $("#header").load("../components/header.html");
    $("#footer").load("../components/footer.html");
});

let API_KEY = '06e9d8f5e9eb4e74a0f82423242809';
//API will expired in 13/10/2024
//get new API key here: https://www.weatherapi.com/

const fetchWeather = async (city) => {
    const API = `https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${city}&days=5&aqi=yes&alerts=yes`;

    fetch(API).then((response) => {
        if (!response.ok) {
            alert(`No weather found in ${city}`);
            throw new Error("No weather found.");
        }
        return response.json();
    })
        .then((data) => {
            displayWeather(data)
        }
        );

}

const displayWeather = (data) => {
    const { current, forecast, location } = data;

    //display Now card
    $('.weather-forecast__now-infor--detail p').html(current?.temp_c + "°C");
    $(".weather-forecast__now-infor--detail img").attr("src", current?.condition?.icon.replace('64x64', '128x128'));
    $(".weather-forecast__now-infor--text .location").html(location?.name + ", " + location?.country)
    $(".weather-forecast__now-infor--text .date").html(location?.localtime)

    //display forecast by day card
    const forecastDay = forecast.forecastday;
    $(".weather-forecast__forecast-infor--detail").remove();
    forecastDay.map((item) => {
        $(".weather-forecast__forecast-infor").append(`
            <div class="weather-forecast__forecast-infor--detail">
                    <img src='${item?.day?.condition?.icon.replace('64x64', '128x128')}' alt="">
                    <p>${item?.day?.avgtemp_c}&deg;C</p>
                    <p>${item?.date}</p>
            </div>
        `)
    })

    //display air quality card
    const airQuality = current.air_quality;
    $(".air-quality__item .co").html(airQuality?.co);
    $(".air-quality__item .no2").html(airQuality?.no2);
    $(".air-quality__item .o3").html(airQuality?.o3);
    $(".air-quality__item .so2").html(airQuality?.so2);
    $(".air-quality__item .pm2_5").html(airQuality?.pm2_5);
    $(".air-quality__item .pm10").html(airQuality?.pm10);

    const name = 'gb-defra-index'
    let airQualityLevel = airQuality[name];

    if (airQualityLevel <= 3) {
        $('.air-quality__status').addClass('level-1')
        $('.air-quality__status').html('GOOD')
    } else if (airQualityLevel <= 6) {
        $('.air-quality__status').addClass('level-2')
        $('.air-quality__status').html('FAIR')
    } else if (airQualityLevel <= 9) {
        $('.air-quality__status').addClass('level-3')
        $('.air-quality__status').html('POOR')
    } else {
        $('.air-quality__status').addClass('level-4')
        $('.air-quality__status').html('VERY POOR')
    }

    //display sunrise and sunset time
    const sun = forecast?.forecastday[0]?.astro;
    $('.sun__item-infor .sunrise').html(sun?.sunrise)
    $('.sun__item-infor .sunset').html(sun?.sunset)

    //display property
    $(".property__item #humidityVal").html(`${current?.humidity}%`)
    $(".property__item #uvVal").html(current?.uv)
    $(".property__item #winVal").html(`${current?.wind_kph} km/h`)
    $(".property__item #temperatureVal").html(`${current?.feelslike_c}&deg;C`)

    //display by hour
    $(".hourly-forecast").remove();
    const hourForecast = forecast?.forecastday[0]?.hour;
    for (let i = 0; i < 24; i += 3) {
        $(".right-bottom__content").append(`
            <div class="hourly-forecast card">
                <p>${hourForecast[i]?.time.split(' ')[1]}</p>
                <img src="${hourForecast[i]?.condition?.icon.replace('64x64', '128x128')}" alt="">
                <p>${hourForecast[i]?.temp_c}&deg;C</p>
            </div>
        `)
    }
}

fetchWeather('Can Tho')

document.addEventListener('DOMContentLoaded', function () {

    document
        .querySelector(".weather-forecast__search--button")
        .addEventListener("click", function () {
            const searchValue = document.querySelector(".weather-forecast__search--input").value;
            if (searchValue) {
                fetchWeather(searchValue);
                document.querySelector('.weather-forecast__search--input').value = ''
            }
        });

    document
        .querySelector(".weather-forecast__search--input")
        .addEventListener("keyup", function (event) {
            const searchValue = document.querySelector(".weather-forecast__search--input").value;
            if (event.key == "Enter" && searchValue) {
                fetchWeather(searchValue);
                document.querySelector('.weather-forecast__search--input').value = '';
            }
        });

});