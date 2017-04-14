let Card = require('./Card');

function Deck() {
    const suits = ['Hearts', 'Diamonds', 'Clubs', 'Spades'];
    const values = ['Ace', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King'];
    this.cards = suits.reduce((cards, suit) => {
        return cards.concat(values.reduce((cardsOfSuit, value) => {
            return cardsOfSuit.concat(new Card(value, suit));
        }, []));
    }, []);
    // console.log(this.cards);
}

Deck.prototype.deal = function() {
    // let cardDealer = this.cards[0]
    return this.cards.shift(); //the 0 in the [] made it 2 of Hearts. this isn't correct.
}

module.exports = Deck;
