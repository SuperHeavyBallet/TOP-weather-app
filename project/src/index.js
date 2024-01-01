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
    const chosenCity = responseData.location.name;
    const chosenCountry = responseData.location.country;

    const chosenWeather = responseData.current.condition.text;

    console.log(chosenCity, chosenCountry);
    console.log("Expect: ",chosenWeather);

}

getWeatherData("London");