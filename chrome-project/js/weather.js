const API_KEY = "a03a2d4fd7e59cc862415f38dc33c834";

function onGeoOk(position){
    const lat = position.coords.latitude;
    const log = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${log}&appid=${API_KEY}&units=metric`
    fetch(url)
        .then(response => response.json())
        .then(data => {
            const weather = document.querySelector("#weather-box .weather")
            const city = document.querySelector("#weather-box .city")       
            city.innerText = data.name;
            weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
    });
}
function onGeoError(){
    alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);

