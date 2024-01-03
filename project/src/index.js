const cityInput = document.getElementById("city-input");
const searchButton = document.getElementById("search-button");
const cityDisplay = document.getElementById("city-display");
const cityCountry = document.getElementById("country-display");
const cityWeather = document.getElementById("city-weather");
const cityTemperature = document.getElementById("city-temperature");
const cityFeelsLike = document.getElementById("city-feels-like");
const cityWeatherImage = document.getElementById("city-weather-image");
// const cityAirQuality = document.getElementById("city-air-quality");
const cityTime = document.getElementById("city-time");
const cityDate = document.getElementById("city-date");





async function getWeatherData(inputLocation)
{
    const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=7b4b75f743264fda98e140311232912&q=${inputLocation}&aqi=yes`, { mode: "cors"});
    
    try {   
        if(response.ok)
        {
            const responseData = await response.json();
            console.log(responseData);
            generateWeatherObject(responseData);
        }

        } catch (error) {
            console.error("Error during fetch:", error);
        }
    
}


function generateWeatherObject(responseData)
{

    const weatherObject = {
        city: responseData.location.name,
        country: responseData.location.country,
        weather: responseData.current.condition.text,
        weatherImage : responseData.current.condition.icon,
        temperatureC: responseData.current.temp_c,
        temperatureF: responseData.current.temp_f,
        feelsLikeC: responseData.current.feelslike_c,
        feelsLikeF: responseData.current.feelslike_f,
        // airQuality: responseData.current.air_quality["gb-defra-index"],
        localTimeHour: responseData.location.localtime.slice(10),
        localTimeDate: responseData.location.localtime.slice(0,10)
    };

    // const airQualityText = "";
    console.log(weatherObject.localTimeHour);
    console.log(weatherObject.localTimeDate);

    /*
    if (weatherObject.airQuality >= 0 && weatherObject.airQuality <= 3)
    {
        airQualityText = "Low Pollution";
    }
    else if (weatherObject.airQuality > 3 && weatherObject.airQuality <= 6)
    {
        airQualityText = "Moderate Pollution";
    }
    else if (weatherObject.airQuality > 6 && weatherObject.airQuality <= 9)
    {
        airQualityText = "High Pollution";
    }
    else if (weatherObject.airQuality > 9)
    {
        airQualityText = "Very High Polution";
    }
    */

    console.log(weatherObject);

    cityTime.textContent = weatherObject.localTimeHour;
    cityDate.textContent = weatherObject.localTimeDate;
    cityDisplay.textContent = (weatherObject.city);
    cityCountry.textContent = (weatherObject.country);
    cityWeather.textContent = (weatherObject.weather);
    cityWeatherImage.src = weatherObject.weatherImage;
    cityTemperature.textContent = (`${weatherObject.temperatureC}C / ${weatherObject.temperatureF}F`);
    cityFeelsLike.textContent = (`Feels Like: ${weatherObject.feelsLikeC}C / ${weatherObject.feelsLikeF}F`);
    // cityAirQuality.textContent = (`Air Quality: ${weatherObject.airQuality} / 10 (${airQualityText})`)

}

getWeatherData("London");
console.log(cityInput.value);

searchButton.addEventListener("click", () => {
    

    if (cityInput.value !== "")
    {
        console.log("Clicked Search!");
        getWeatherData(cityInput.value);
    }
})


cityInput.addEventListener("change", (event) =>
{
    event.preventDefault();
    console.log(cityInput.value);
    
});