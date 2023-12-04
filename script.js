// JavaScript functions for card flipping
function flipCard(card) {
    card.querySelector('.card-inner').style.transform = 'rotateY(180deg)';
}

function flipCardBack(card) {
    card.querySelector('.card-inner').style.transform = 'rotateY(0deg)';
}