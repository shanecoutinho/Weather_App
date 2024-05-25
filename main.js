
const apiKey = "6bd42c22da09e48cd0252893bb8a351a";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=manchester";

async function checkWeather() {
    const response = await fetch(apiUrl + `&appid=${apiKey}`)
    var data = await response.json();
    
    console.log(data);
    document.querySelector(".").innerHTML = ;
}
checkWeather();    