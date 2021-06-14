// Code your solutions in this file

/*

for (let age = 30; age < 40; age++) {
    console.log(`I'm ${age} years old. Happy birthday to me!`);
 
}

const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
    for (let i = 0; i < gifts.length; i++) {
        console.log(`Wrapped ${gifts[i]} and added a bow!`);
    }
    return gifts;
}

wrapGifts(gifts);


*/


function writeCards(name, event) {
    let messageArray = []; 
    for (let i = 0; i < name.length; i++) {
        messageArray.push(`Thank you, ${name[i]}, for the wonderful ${event} gift!`);
    }
    return messageArray;
}

writeCards(["Joe", "Susy", "Pete"], "surprise");

function countDown() {
    let count = 10;
    while (count > -1) {
        console.log(count--);
    }
}

countDown();
