var button = document.querySelector('.button')
var inputValue = document.querySelector('.inputValue')
var cityname = document.querySelector('.name');
var desc = document.querySelector('.desc');
var temp = document.querySelector('.temp');
var feelslike = document.querySelector('.feelslike');

button.addEventListener('click',function(){
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputValue.value+'&units=imperial&appid=77d394d688f2c87b4e65a41ad11b4153') 
    .then(response => response.json())
    .then(data => {
        var citynameValue = data ['name'];
        var tempValue = data ['main']['temp'];
        var descValue = data ['weather'][0]['description'];
        var feelslikeValue = data ['main']['feels_like'];

        //locationIcon.innerHTML =  locationIcon + ".png";
        cityname.innerHTML = citynameValue;
        desc.innerHTML = "Weather: " + descValue;
        temp.innerHTML = "Current Temperature: " + tempValue;
        feelslike.innerHTML = "Currently Feels Like: " +feelslikeValue;
    

    })
    
    .catch(err => alert("City imput incorrect"))
})

  
