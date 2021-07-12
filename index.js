
let topMessage = document.querySelector("#top-message");
let cardText = document.querySelector("#cards");
let sumText = document.querySelector("#sum");
let startButton = document.querySelector("#start");
let newButton = document.querySelector("#new");
let card1Element = document.querySelector("#card1");
let card2Element = document.querySelector("#card2");

const map = new Map();
map.set(1,"1.png");
map.set(2,"2.png");
map.set(3,"3.png");
map.set(4,"4.png");
map.set(5,"5.png");
map.set(6,"6.png");
map.set(7,"7.png");
map.set(8,"8.png");
map.set(9,"9.png");
map.set(10,"10.png");


function getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

function getImage(n) {
    let path = "";
    switch(n) {
        case 1 : path = map.get(1); break;
        case 2 : path = map.get(2); break;
        case 3 : path = map.get(3); break;
        case 4 : path = map.get(4); break;
        case 5 : path = map.get(5); break;
        case 6 : path = map.get(6); break;
        case 7 : path = map.get(7); break;
        case 8 : path = map.get(8); break;
        case 9 : path = map.get(9); break;
        case 10 : path = map.get(10); break;
    }

    return path;
}

function blinktext() {
    var f = document.getElementById('instruction');
    setInterval(function() {
      f.style.visibility = (f.style.visibility == 'hidden' ? '' : 'hidden');
    }, 400);
  }

function startGame() {

    let card1 = getRandomArbitrary(1,10);
    let card2 = getRandomArbitrary(1,10); 

    let card1Path = getImage(card1);
    let card2Path = getImage(card2);
    
    card1Element.src = "images/"+card1Path;
    card1Element.height = 150;
    card1Element.width = 95;

    card2Element.src = "images/"+card2Path;
    card2Element.height = 150;
    card2Element.width = 95;
    
    let message = "";

    let sum = card1 + card2;

    sumText.textContent = "Sum : "+sum;

    if(sum != 21) message = "Better Luck next time !!";
    else message = "Yayy !! You got the blackjack";

    topMessage.textContent = message;

    startButton.disabled = true;
}

function newCard() {
    let card1 = getRandomArbitrary(1,10);
    let card2 = getRandomArbitrary(1,10); 

    let card1Path = getImage(card1);
    let card2Path = getImage(card2);

    card1Element.src = "images/"+card1Path;
    card1Element.height = 150;
    card1Element.width = 95;

    card2Element.src = "images/"+card2Path;
    card2Element.height = 150;
    card2Element.width = 95;
    
    
    
    let message = "";

    let sum = card1 + card2;

    sumText.textContent = "Sum : "+sum;

    if(sum != 15) message = "Better Luck next time !!";
    else message = "Yayy !! You got the blackjack";

    topMessage.textContent = message;

}