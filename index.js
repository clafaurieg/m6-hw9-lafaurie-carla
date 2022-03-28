var button = document.querySelector('.button')
var inputValue = document.querySelector('.inputValue')
var cityname = document.querySelector('.name');
var desc = document.querySelector('.desc');
var temp = document.querySelector('.temp');
var feelslike = document.querySelector('.feelslike');
//var locationIcon = document.getElementsByClassName('weather-icon');

button.addEventListener('click',function(){
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputValue.value+'&units=imperial&appid=64699652dcf212be09f4bb3e58fb76ea') 
    .then(response => response.json())
    .then(data => {
        var citynameValue = data ['name'];
        var tempValue = data ['main']['temp'];
        var descValue = data ['weather'][0]['description'];
        var feelslikeValue = data ['main']['feels_like'];
        //var locationIcon = data['weather'][0]['icon'];

        //locationIcon.innerHTML =  locationIcon + ".png";
        cityname.innerHTML = citynameValue;
        desc.innerHTML = "Weather: " + descValue;
        temp.innerHTML = "Current Temperature: " + tempValue;
        feelslike.innerHTML = "Currently Feels Like: " +feelslikeValue;
    

    })
    
    .catch(err => alert("Wrong city name"))
})
