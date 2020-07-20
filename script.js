var cards = [
    { "cardNo": 1, "color": "color1" },
    { "cardNo": 2, "color": "color2" },
    { "cardNo": 3, "color": "color3" },
    { "cardNo": 4, "color": "color2" },
    { "cardNo": 5, "color": "color3" },
    { "cardNo": 6, "color": "color4" },
    { "cardNo": 7, "color": "color4" },
    { "cardNo": 8, "color": "color1" },
    { "cardNo": 9, "color": "color3" },
];

//Constructs an html string using the current cards object and renders it.
function renderCards(cardObj) {
    var strHTML = "<ul>";
    cardObj.forEach(element => {
        card = "<li class ='" + element.color + "'>" + element.cardNo + "</li>"
        strHTML = strHTML + card;
    });
    strHTML = strHTML + "</ul>";
    document.getElementsByClassName("card-container")[0].innerHTML = strHTML;
}

window.onload = function () {
    renderCards(cards)
};

//Randomly swaps all elements.
function shuffle() {
    var rand,i;
    var cardsLength = cards.length;
    for (i = cardsLength - 1; i > 0; i -= 1) {
        rand = Math.floor((i + 1) * Math.random());
        //swaps i'th element with the random'th element.
        [cards[i],cards[rand]] = [cards[rand],cards[i]];
    }
    renderCards(cards);
}

//Sorts the cards in ascending order.
function sort() {
    var cardObj = cards.sort((a, b) => (a.cardNo - b.cardNo));
    renderCards(cardObj);
}

