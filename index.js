
let topMessage = document.querySelector("#top-message");
let cardText = document.querySelector("#cards");
let sumText = document.querySelector("#sum");
let startButton = document.querySelector("#start");
let newButton = document.querySelector("#new");

function getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

function startGame() {

    let card1 = getRandomArbitrary(1,15);
    let card2 = getRandomArbitrary(1,15); 
    
    cardText.textContent = "Cards : "+card1+" "+card2;
    
    let message = "";

    let sum = card1 + card2;

    sumText.textContent = "Sum : "+sum;

    if(sum != 21) message = "Better Luck next time !!";
    else message = "Yayy !! You got the blackjack";

    topMessage.textContent = message;

    startButton.disabled = true;
}

function newCard() {
    let card1 = getRandomArbitrary(1,15);
    let card2 = getRandomArbitrary(1,15); 

    cardText.textContent = "Cards : "+card1+" "+card2;
    
    let message = "";

    let sum = card1 + card2;

    sumText.textContent = "Sum : "+sum;

    if(sum != 21) message = "Better Luck next time !!";
    else message = "Yayy !! You got the blackjack";

    topMessage.textContent = message;

}