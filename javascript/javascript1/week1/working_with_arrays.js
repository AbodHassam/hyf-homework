var words ;
const myFavoriteAnimals = ['Leopard'+'\n'+'Cat'+'\n'+'Eagle'];
var babyLion = 'babyLion';
console.log('I think the value of "words" is undefined.');
console.log('the value of "words" is : '+words);
console.log('My favorite animals : '+'\n'+myFavoriteAnimals);
console.log('Adding one more : ');
myFavoriteAnimals.push('Hedgehog');
for (let i = 0; i < myFavoriteAnimals.length; i++) {
    console.log(myFavoriteAnimals[i]);
}