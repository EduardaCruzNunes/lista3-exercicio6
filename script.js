var temperaturaMedia = [];
var temperaturaMediaNumber = [];
var max = 0;
var min = 0;
var media = 0;

while(temperaturaMedia.length < 7){
    let temperatura = prompt('Digite a temperatura :');
    temperaturaMedia.push(temperatura);
    media =  media * 1 + temperatura * 1;
}
temperaturaMediaNumber = temperaturaMedia.map(Number);
console.log(temperaturaMediaNumber);
max = Math.max(...temperaturaMediaNumber); 
console.log(max , 'É a maior temperatura!');
min = Math.min(...temperaturaMediaNumber); 
console.log(min , 'É a menor temperatura!');

console.log(media / 7 , 'É a temperatura media!');
