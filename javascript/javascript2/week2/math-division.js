let firstParagraph = document.querySelector('.first-paragraph')
let secondParagraph = document.querySelector('.second-paragraph')

function threeFive(startIndex, stopIndex, threeCallback, fiveCallback) {
    // make array
    const numbers =[];
    // looping through the array. Checking if you should call threeCallback and/or fiveCallback.
    for(let i=startIndex;i<=stopIndex;i++) {
        numbers.push(i);
        if(i%3==0) {
            threeCallback(i);
        }
        if(i%5==0) {
            fiveCallback(i);
        }
    }
    return numbers;
}

button.addEventListener('click', event =() => {    
    //threeFive();
    //Create an array from 0 to=> 21 and call arguments:(threeCallback, fiveCallback)
    h3.innerHTML +=(threeFive(0, 21, function(num) { firstParagraph.innerHTML +=(num+' is dividable by 3'+('<br>'));}, function(num) { secondParagraph.innerHTML +=(num+' is dividable by 5'+('<br>'));}))
    //Make the event click to work only once
    button.removeEventListener('click', event);
})
