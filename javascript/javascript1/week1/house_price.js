let peterHouse={
    width:'8',
    depth:'10',
    height:'10',
    gardernSize:'100'
}
let juliaHouse={
    width:'5',
    depth:'11',
    height:'8',
    gardernSize:'70'
}
const peterVolumeInMeters=peterHouse.width*peterHouse.depth*peterHouse.height;
const juliaVolumeInMeters=juliaHouse.width*juliaHouse.depth*juliaHouse.height;
const peterActualHousePrice=peterVolumeInMeters*2.5*1000 + peterHouse.gardernSize*300;
const juliaActualHousePrice=juliaVolumeInMeters*2.5*1000 + juliaHouse.gardernSize*300;
const peterHousePrice= 2500000 ;
const juliaHousePrice= 1000000 ;
console.log('Peter is considering a house that is 8m wide, 10m deep and 10m high. The garden size is 100m2. The house costs 2.500.000. '+'\n'+'Julia is considering a house that is 5m wide, 11m deep and 8m high. The garden size is 70m2. This house costs 1.000.000.'+'\n');
console.log('Peter house price is :'+peterHousePrice+'\n'+'Peter actual house price is :'+peterActualHousePrice);
if (peterHousePrice>peterActualHousePrice){
    console.log('So  Peter is paying too much'+'\n');
}
else {console.log('So  Peter is paying too little'+'\n');}
console.log('Julia house price is :'+juliaHousePrice+'\n'+'Julia actual house price is :'+juliaActualHousePrice);
if (juliaHousePrice>juliaActualHousePrice){
    console.log('So  Julia is paying too much');
}
else {console.log('So  Julia is paying too little');}
