
const API_KEY = "a03a2d4fd7e59cc862415f38dc33c834";

// https://api.openweathermap.org/data/2.5/weather?lat=37.5733586&lon=127.0272785&appid=a03a2d4fd7e59cc862415f38dc33c834

function onGeoOk(position){
    const lat = position.coords.latitude;
    const log = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${log}&appid=${API_KEY}&units=metric`
    console.log(url);
    fetch(url)
        .then(response => response.json())
        .then(data => {
            const weathers = document.querySelector("#weather")
            const city = document.querySelector("#weather")
            const name = data.name
            const weather = data.weather[0].main
    });
}
function onGeoError(){
    alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);

