// Day 80 - Weather App

const searchBtn = document.getElementById("searchBtn");

searchBtn.addEventListener("click", async () => {

    const city = document.getElementById("city").value;

    const apiKey = "YOUR_API_KEY";

    const url =
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try{

        const response = await fetch(url);

        const data = await response.json();

        document.getElementById("cityName").textContent = data.name;

        document.getElementById("temperature").textContent =
        `Temperature : ${data.main.temp} °C`;

        document.getElementById("condition").textContent =
        `Weather : ${data.weather[0].main}`;

    }

    catch(error){

        alert("Unable to fetch weather data.");

        console.log(error);

    }

});

console.log("Day 80 Completed Successfully!");