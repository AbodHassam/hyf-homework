function threeFive() {

    if (input.value % 3 == 0) {
        document.body.style.backgroundColor = 'blue';
    } else {
        document.body.style.backgroundColor = 'green';
    }
    if (input.value % 5 == 0) {
        document.body.style.backgroundColor = 'yellow';
    }
    if (input.value % 3 == 0 && input.value % 5 == 0 || input.value == null || input.value == '') {
        paragraph.innerHTML = 'the number is divisible with 3 & 5 !!!';
        document.body.style.backgroundColor = 'green';
    }

}

button.addEventListener('click', () => {
    console.log('you clicked me!');
    paragraph.innerHTML = input.value;
    threeFive();
})


let showLocation = document.getElementById('show-location');

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        loc.innerHTML = "Geolocation is not supported by this browser.";
    }
}

function showPosition(position) {
    loc.innerHTML = "Latitude: " + position.coords.latitude +
        "<br>Longitude: " + position.coords.longitude;
}

function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: 55.676098, lng: 12.568337 },
        zoom: 8
    });
}

showLocation.addEventListener('click', () => {
    getLocation();
    initMap();
})