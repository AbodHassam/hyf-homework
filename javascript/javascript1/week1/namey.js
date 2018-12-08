let firstWords = ["awesome","amazing","humanity","Diamond","independence","global","Classic","golden","silver","free"]; 
let secondWords = ["freedom","Alliance","Friendship","school","way","future","Generation","Pirate","man","woman"];
const xRandom = Math.floor(Math.random()*10);
const yRandom = Math.floor(Math.random()*10);
let startupName = firstWords[xRandom] +' '+ secondWords[yRandom];
console.log('The startup:','"'+startupName+'"','contains',startupName.length,'characters.');
