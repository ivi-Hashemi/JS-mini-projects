const apiKey = "6a6aeff04e6ac4ba64fb832546163191"
const url = "https://api.openweathermap.org/data/2.5/weather?q=london&appid=6a6aeff04e6ac4ba64fb832546163191&units=metric"
const input = document.getElementById('input')
const btn = document.getElementById('btn')
const icon = document.getElementById('icon')
const temp = document.getElementById('temp')
const weather = document.getElementById('weather')
const feel = document.getElementById('feel')
const humidity = document.getElementById('humidity')
const wind = document.getElementById('wind')

async function getWeatherData(city) {
    try {
        const request = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
        const data = await request.json()
        console.log(data)
        temp.textContent = data.main.temp
        weather.textContent = data.weather[0].description
        feel.textContent = "Feels like: "+data.main.feels_like
        humidity.textContent = "Humidity: "+data.main.humidity+"%"
        wind.textContent = "Wind speed: "+data.wind.speed+"m/s"
        icon.setAttribute('src',`http://openweathermap.org/img/wn/${data.weather[0].icon}.png`)
    }catch (err){
        alert(err)
    }finally {

    }

}

btn.addEventListener('click',(event)=>{
    event.preventDefault()
    let city = input.value
    getWeatherData(city)
})