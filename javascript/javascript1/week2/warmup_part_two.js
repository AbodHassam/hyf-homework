function myObject() {
    let timekey = { time: 12, };
    return timekey;
}

let timeObject = myObject();
console.log(timeObject);
console.log('\n');

function myArray(color1, color2, color3) {
    let obj1 = { color: 'red' };
    let obj2 = { color: 'green' };
    let obj3 = { color: 'yellow' };
    let obj = [obj1, obj2, obj3]
    return obj;
}

let colorObjects = myArray();
console.log(colorObjects);

for (let i = 0; i < colorObjects.length; i++) {
    console.log(colorObjects[i].color);
}