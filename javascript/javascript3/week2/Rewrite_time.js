function setTimeoutPromise(time) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(time)
    }, 3000);
  })
};

setTimeoutPromise(3000)
  .then(() => {
    console.log('Called after 3 seconds');
  });

//

function getCurrentLocation() {
  /* if (!navigator.geolocation){
    console.log("Geolocation is not supported by your browser");
    return;
  }
  function success(position) {
    var latitude  = position.coords.latitude;
    var longitude = position.coords.longitude;

    console.log('Latitude is ' + latitude + '°  ,  Longitude is ' + longitude + '°');

  }
  function error() {
    console.log("Unable to retrieve your location");
  } */
  return new Promise((resolve,reject)=>{
    navigator.geolocation.getCurrentPosition(resolve, reject)
  })

  
  //navigator.geolocation.getCurrentPosition(success, error);
}
 
getCurrentLocation()
  .then((position) => {
    // called when the users position is found
    console.log("latitude : "+position.coords.latitude+ '\n' + "longitude : "+position.coords.longitude);
  })
  .catch((error) => {
    // called if there was an error getting the users location
    console.log(error.message);
  });