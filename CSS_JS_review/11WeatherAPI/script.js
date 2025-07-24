const apiKey='b6b190b1de95a1efbf3954843cf8f7ce';
//const apiURL='https://api.openweathermap.org/data/2.5/weather?lat=-37.8142454&lon=144.9631732&appid=b6b190b1de95a1efbf3954843cf8f7ce';
const apiWeatherURL='https://api.openweathermap.org/data/2.5/weather?units=metric';
const apiGeoURL='https://api.openweathermap.org/geo/1.0/direct?'
const searchBox=document.getElementById('search_input')
const searchBtn=document.getElementById('search_btn')
const weatherIcon=document.getElementById('weather_icon')



async function checkWeather(city) {
    responseGeo=await checkGeo(city)
    if (responseGeo==false){
        document.getElementById('error').style.display="block";
        document.getElementById('weather').style.display="none";
    }else{
        lat=responseGeo.lat;
        lon=responseGeo.lon;

        const response=await fetch(apiWeatherURL+`&lat=${lat}`+`&lon=${lon}`+`&appid=${apiKey}`);
        data=await response.json();
        console.log(data);
        //document.querySelector('.city').innerHTML=data.name;
        //instead of querySelector, getelementByID is a better way to display data.
        document.getElementById('city').innerHTML=data.name;
        document.getElementById('temp').innerHTML=Math.round(data.main.temp)+"°C";
        document.getElementById('humidity').innerHTML=data.main.humidity+"%";
        document.getElementById('wind').innerHTML=data.wind.speed+"km/h";

        //update images
        if(data.weather[0].main=='Clouds'){
            weatherIcon.src="images/clouds.png";
        }
        if(data.weather[0].main=='Clear'){
            weatherIcon.src="images/clear.png";
        }
        if(data.weather[0].main=='Rain'){
            weatherIcon.src="images/rain.png";
        }
        if(data.weather[0].main=='Drizzle'){
            weatherIcon.src="images/drizzle.png";
        }
        if(data.weather[0].main=='Mist'){
            weatherIcon.src="images/mist.png";
        }
        document.getElementById('weather').style.display="block"
        document.getElementById('error').style.display="none"

        }

    



}

searchBtn.addEventListener('click',()=>{
    checkWeather(searchBox.value)

})
//checkWeather();


async function checkGeo(city){
    const responseGeo=await fetch(apiGeoURL+`&q=${city}`+`&appid=${apiKey}`);
    cityGeo=await responseGeo.json();
    console.log(responseGeo);
    console.log(cityGeo);
    //console.log(cityGeo[0].lat);
    if(cityGeo===''||cityGeo.length===0){
        console.log(" checkGeo return false")
        return false
    }else{
        console.log(" checkGeo return lat, lon")
        return {
            lat:cityGeo[0].lat,
            lon:cityGeo[0].lon
        }
    }
}
//checkGeo('melbourne')