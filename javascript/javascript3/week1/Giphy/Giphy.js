let base = "https://api.giphy.com/v1/gifs/search?q=";
let apiKey = '&api_key=ejNiecIKONpHP5Gq0wCDoA7oGVX0KXuR';
let getGif = document.getElementById('get-gif');
let input = document.querySelector('#input');
let outputs = document.querySelector('.outputs');
getGif.addEventListener('click', () => {
    // alert ("done");

    //alert (input);
    if (input.value == '' || input.value == null) {
        alert('Please enter a name!!! ');
    } else {
        let api = base+ input.value + apiKey;
        fetch(api)
            .then(response => response.json())
            .then((gifData) => {
                // console.log (gifData);
                //console.log(outputs);
                //console.log(gifData.data[1].images.preview_webp.url);
                outputs.innerHTML = '<img src="'+gifData.data[1].images.preview_webp.url+'" alt="'+input.value+'">'
                
            })
    }
})