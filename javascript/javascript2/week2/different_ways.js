//Creating an array with 3 items. all items are functions.
let scienceFiction = function () {
    console.log('The Forever War');
}

let cosmology = function () {
    console.log('A Brief History of Time');
}
let manga = function () {
    console.log('One Piece');
}

// going through the array and calling them.
let myBooksType = [scienceFiction, cosmology, manga]
myBooksType.forEach(book => {
    book();
});

//Creating a function as a const and another function normally.
const constFunction = () => {
    console.log('Hi');
}
function normalFunction() {
    console.log('Hi');
}
//calling both function.
constFunction();
normalFunction();

//Creating an object that has a key whose value is a function, and calling this function.
let myName = { fullName: () => { return 'Abod Hassam'; } }
console.log(myName.fullName());

//Creating two setTimeouts one uses a function that is defined as a const. The other uses an anonymous function that is defined inside the setTimeout.
const sayHi = () => {console.log('Hi');}
setTimeout(sayHi, 2000);
setTimeout(() => {console.log("Hi")}, 3000)

//Creating a function (outer) that returns a function (inner). and calling the outer function and assigning the return to a variable, and calling this variable (that is the inner function).
function outer() {
    
    let inner = () =>{
        console.log('This string is from inner function');
    }
    return inner();
}
outer();