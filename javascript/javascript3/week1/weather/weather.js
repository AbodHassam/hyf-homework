let baseName = "http://api.openweathermap.org/data/2.5/weather?q=";
let baseLoc = "http://api.openweathermap.org/data/2.5/weather?lat=";
let apiKey = '&appid=cd947c359c5f576d0e69bc43a696d89b'
let p = document.createElement('p');
let city = document.getElementById("cityInput");
let info = document.querySelector('.info');
let myInfo = document.querySelector('.my-info');
let getWeather = document.querySelector('.get-weather');
let getMyWeather = document.querySelector('.get-my-weather');

getWeather.addEventListener('click', () => {
  if (city.value == '' || city.value == null) {
    info.style.display = 'initial';
    info.innerHTML = '<p>Please enter the city name</p>';
  } else {
    info.style.display = 'initial';
    let api = baseName + city.value + apiKey;
    fetch(api)
      .then(response => response.json())
      .then((weatherData) => {
        console.log(weatherData);
        let Location = innerHTML = '<p><span>Location : </span>' + weatherData.name + ',' + weatherData.sys.country + '</p>\n';
        let Temperature = innerHTML += '<p><span>Temperature : </span>' + weatherData.main.temp + '&deg;C' + '</p>\n';
        let Humidity = innerHTML += '<p><span>Humidity : </span>' + weatherData.main.humidity + '</p>\n';
        let Conditions = innerHTML += '<p><span>Conditions : </span>' + weatherData.weather[0].description + '</p>\n';
        let weatherIcon = '<img src="http://openweathermap.org/img/w/' + weatherData.weather[0].icon + '.png" alt="' + weatherData.weather[0].main + '">'
        let Icon = innerHTML += '<p><span>Icon : </span>' + weatherIcon + '</p>\n';

        let weatherInformations = [Location, Temperature, Humidity, Conditions, Icon];
        for (let i = 0; i < weatherInformations.length; i++) {
          const element = weatherInformations[i];
          //console.log(element);

          info.innerHTML = element;
        }
      });
  }
});


function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    loc.innerHTML = "Geolocation is not supported by this browser.";
  }
}

function showPosition(position) {
  lat.innerHTML = position.coords.latitude.toFixed(1);
  lon.innerHTML = position.coords.longitude.toFixed(1);
  //console.log(lon.innerHTML);

}

/* function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: { lat: 55.676098, lng: 12.568337 },
    zoom: 12
  });
} */

getMyWeather.addEventListener('click', () => {
  let intervalID = setInterval(() => {
    myInfo.style.display = 'initial';
    let myApi = baseLoc + lat.innerHTML + '&lon=' + lon.innerHTML + apiKey;
    //console.log(myApi);

    fetch(myApi)
      .then(response => response.json())
      .then((weatherData) => {
        console.log(weatherData);
        let Location = innerHTML = '<p><span>Location : </span>' + weatherData.name + ',' + weatherData.sys.country + '</p>\n';
        let Temperature = innerHTML += '<p><span>Temperature : </span>' + weatherData.main.temp + '&deg;C' + '</p>\n';
        let Humidity = innerHTML += '<p><span>Humidity : </span>' + weatherData.main.humidity + '</p>\n';
        let Conditions = innerHTML += '<p><span>Conditions : </span>' + weatherData.weather[0].description + '</p>\n';
        let weatherIcon = '<img src="http://openweathermap.org/img/w/' + weatherData.weather[0].icon + '.png" alt=' + weatherData.weather[0].main + '>'
        let Icon = innerHTML += '<p><span>Icon : </span>' + weatherIcon + '</p>\n';

        let weatherInformations = [Location, Temperature, Humidity, Conditions, Icon];
        for (let i = 0; i < weatherInformations.length; i++) {
          const element = weatherInformations[i];
          //console.log(element);

          myInfo.innerHTML = element;
        }
        loc.style.display = 'initial';
      });
    clearInterval(intervalID)
  }, 5000)
  
  getLocation(); 
  /*initMap(); */
  //console.log('Error');
})