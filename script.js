const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'fca028937bmshaa60dc585c7061dp10dbefjsne4b4ee40f0f0',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
};

const getWeather = (city) => {
    cityName.innerHTML = city
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
        .then(response => response.json())
        .then(response => {
            console.log(response)
            cloud_pct.innerHTML = response.cloud_pct
            temp.innerHTML = response.temp
            feels_like.innerHTML = response.feels_like
            humidity.innerHTML = response.humidity
            min_temp.innerHTML = response.min_temp
            max_temp.innerHTML = response.max_temp
            wind_speed.innerHTML = response.wind_speed
            wind_degrees.innerHTML = response.wind_degrees
            sunrise.innerHTML = response.sunrise

            temp2.innerHTML = response.temp
            humidity2.innerHTML = response.humidity
            wind_speed2.innerHTML = response.wind_speed
        })
        .catch(err => console.error(err));
}

submit.addEventListener("click", (e)=>{
    e.preventDefault()
    getWeather(city.value)
})

getWeather("Delhi")

fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=chicago', options)
        .then(response => response.json())
        .then(response => {
            console.log(response)
            cloud_pct3.innerHTML = response.cloud_pct
            temp3.innerHTML = response.temp
            feels_like3.innerHTML = response.feels_like
            humidity3.innerHTML = response.humidity
            min_temp3.innerHTML = response.min_temp
            max_temp3.innerHTML = response.max_temp
            wind_speed3.innerHTML = response.wind_speed
            wind_degrees3.innerHTML = response.wind_degrees
        })


        fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=shanghai', options)
        .then(response => response.json())
        .then(response => {
            console.log(response)
            cloud_pct4.innerHTML = response.cloud_pct
            temp4.innerHTML = response.temp
            feels_like4.innerHTML = response.feels_like
            humidity4.innerHTML = response.humidity
            min_temp4.innerHTML = response.min_temp
            max_temp4.innerHTML = response.max_temp
            wind_speed4.innerHTML = response.wind_speed
            wind_degrees4.innerHTML = response.wind_degrees
        })

        fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=moscow', options)
        .then(response => response.json())
        .then(response => {
            console.log(response)
            cloud_pct5.innerHTML = response.cloud_pct
            temp5.innerHTML = response.temp
            feels_like5.innerHTML = response.feels_like
            humidity5.innerHTML = response.humidity
            min_temp5.innerHTML = response.min_temp
            max_temp5.innerHTML = response.max_temp
            wind_speed5.innerHTML = response.wind_speed
            wind_degrees5.innerHTML = response.wind_degrees
        })

        fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=berlin', options)
        .then(response => response.json())
        .then(response => {
            console.log(response)
            cloud_pct6.innerHTML = response.cloud_pct
            temp6.innerHTML = response.temp
            feels_like6.innerHTML = response.feels_like
            humidity6.innerHTML = response.humidity
            min_temp6.innerHTML = response.min_temp
            max_temp6.innerHTML = response.max_temp
            wind_speed6.innerHTML = response.wind_speed
            wind_degrees6.innerHTML = response.wind_degrees
        })

        fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=london', options)
        .then(response => response.json())
        .then(response => {
            console.log(response)
            cloud_pct7.innerHTML = response.cloud_pct
            temp7.innerHTML = response.temp
            feels_like7.innerHTML = response.feels_like
            humidity7.innerHTML = response.humidity
            min_temp7.innerHTML = response.min_temp
            max_temp7.innerHTML = response.max_temp
            wind_speed7.innerHTML = response.wind_speed
            wind_degrees7.innerHTML = response.wind_degrees
        })

        fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=sydney', options)
        .then(response => response.json())
        .then(response => {
            console.log(response)
            cloud_pct8.innerHTML = response.cloud_pct
            temp3.innerHTML = response.temp
            feels_like8.innerHTML = response.feels_like
            humidity8.innerHTML = response.humidity
            min_temp8.innerHTML = response.min_temp
            max_temp8.innerHTML = response.max_temp
            wind_speed8.innerHTML = response.wind_speed
            wind_degrees8.innerHTML = response.wind_degrees
        })

        fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=', options)
        .then(response => response.json())
        .then(response => {
            console.log(response)
            cloud_pct9.innerHTML = response.cloud_pct
            temp9.innerHTML = response.temp
            feels_like9.innerHTML = response.feels_like
            humidity9.innerHTML = response.humidity
            min_temp9.innerHTML = response.min_temp
            max_temp9.innerHTML = response.max_temp
            wind_speed9.innerHTML = response.wind_speed
            wind_degrees9.innerHTML = response.wind_degrees
        })