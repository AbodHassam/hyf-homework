//Create an array that contains the spirit animal
let spiritAnimal = ['Smilodon', 'Dragon', 'Lion', 'Phoenix', 'Mammoth', 'Dinosaur', 'Hydra', 'Unicorn', 'Pegasus', 'Mermaid'];

//Declaring shortcuts
let selector = document.getElementById('selector');
let error = document.getElementById('error');
let test = document.getElementById('test');
let click = document.getElementById('click');
let written = document.getElementById('written');
let changes = document.getElementById('changes');
let focus = document.getElementById('focus');
let mouseover = document.getElementById('mouseover');
let myBtn = document.getElementById('myBtn');
let name = document.getElementById('name');
let name1 = document.getElementById('name1');
let name2 = document.getElementById('name2');
let name3 = document.getElementById('name3');
let name4 = document.getElementById('name4');
let spirit = document.getElementById('spirit');
let spirit1 = document.getElementById('spirit1');
let spirit2 = document.getElementById('spirit2');
let spirit3 = document.getElementById('spirit3');
let spirit4 = document.getElementById('spirit4');

//Create the event selection
selector.addEventListener('change', () => {
    if (selector.value === 'Select a mode') {
        error.style.display = 'inline';
    } else {
        error.style.display = 'none';
    }
    if (selector.value === '--Click button--') {
        click.style.display = 'block';
    } else {
        click.style.display = 'none';
    }
    if (selector.value === '--Text written--') {
        written.style.display = 'block';
    } else {
        written.style.display = 'none';
    }
    if (selector.value === '--Input changes--') {
        changes.style.display = 'block';
    } else {
        changes.style.display = 'none';
    }
    if (selector.value === '-- Focus on input--') {
        focus.style.display = 'block';
    } else {
        focus.style.display = 'none';
    }
    if (selector.value === '-- Mouseover onto input--') {
        mouseover.style.display = 'block';
    } else {
        mouseover.style.display = 'none';
    }

});

//Create an event to get a random item in the array that will represent the spirit animal and changing by click
myBtn.addEventListener('click', () => {
    let x = Math.floor(Math.random() * 10);
    if (name.value == "" || name.value == null) {
        spirit.style.color = "red";
        spirit.style.backgroundColor = 'white';
        spirit.style.boxShadow = ' 3px 1px 15px white';
        spirit.innerHTML = "Please type a name";
        //console.log("Please type a name");
        //return false
    }
    else {
        spirit.style.color = "black";
        spirit.style.backgroundColor = '#55e7c4';
        spirit.innerHTML = 'Your spirit animal is :' + name.value + " - The legendary " + spiritAnimal[x];
    }
});

//Create an event to get a random item in the array that will represent the spirit animal and changing by written
name1.addEventListener('input', () => {
    let x = Math.floor(Math.random() * 10);
    if (name1.value == "" || name1.value == null) {
        spirit1.style.color = "red";
        spirit1.style.backgroundColor = 'white';
        spirit1.style.boxShadow = ' 3px 1px 15px white';
        spirit1.innerHTML = "Please type a name";
    }
    else {
        spirit1.style.color = "black";
        spirit1.style.backgroundColor = '#55e7c4';
        spirit1.innerHTML = 'Your spirit animal is :' + name1.value + " - The legendary " + spiritAnimal[x];
    }
});

//Create an event to get a random item in the array that will represent the spirit animal and changing by changing the input value
name2.addEventListener('change', () => {
    let x = Math.floor(Math.random() * 10);
    if (name2.value == "" || name2.value == null) {
        spirit2.style.color = "red";
        spirit2.style.backgroundColor = 'white';
        spirit2.style.boxShadow = ' 3px 1px 15px white';
        spirit2.innerHTML = "Please type a name";
    }
    else {
        spirit2.style.color = "black";
        spirit2.style.backgroundColor = '#55e7c4';
        spirit2.innerHTML = 'Your spirit animal is :' + name2.value + " - The legendary " + spiritAnimal[x];
    }
});

//Create an event to get a random item in the array that will represent the spirit animal and changing by focusing  on the input
name3.addEventListener('focus', () => {
    let x = Math.floor(Math.random() * 10);
    if (name3.value == "" || name3.value == null) {
        spirit3.style.color = "red";
        spirit3.style.backgroundColor = 'white';
        spirit3.style.boxShadow = ' 3px 1px 15px white';
        spirit3.innerHTML = "Please type a name";
    }
    else {
        spirit3.style.color = "black";
        spirit3.style.backgroundColor = '#55e7c4';
        spirit3.innerHTML = 'Your spirit animal is :' + name3.value + " - The legendary " + spiritAnimal[x];
    }
});

//Create an event to get a random item in the array that will represent the spirit animal and changing by mouseovering onto the input
name4.addEventListener('mouseover', () => {
    let x = Math.floor(Math.random() * 10);
    if (name4.value == "" || name4.value == null) {
        spirit4.style.color = "red";
        spirit4.style.backgroundColor = 'white';
        spirit4.style.boxShadow = ' 3px 1px 15px white';
        spirit4.innerHTML = "Please type a name";
    }
    else {
        spirit4.style.color = "black";
        spirit4.style.backgroundColor = '#55e7c4';
        spirit4.innerHTML = 'Your spirit animal is :' + name4.value + " - The legendary " + spiritAnimal[x];
    }
});
