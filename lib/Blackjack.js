let Card = require('./Card');
let Deck = require('./Deck');

function Blackjack(player, dealer) {
    this.player = player;
    this.dealer = dealer;
    this.deck = new Deck;
    this.playerGets = [];
    this.dealerGets = [];
    this.playerHandValue = [];
    this.dealerHandValue = [];
}

Blackjack.prototype.gameStartsNow = function() {
    for (let i = 0; i < 2; i++) {
        this.playerGets.push(this.deck.deal());
        this.playerHandValue = this.playerGets.map(object => object.value);
        this.dealerGets.push(this.deck.deal());
        this.dealer
        //cause i'm not asking for anything in return I don't need the let....
    }
            console.log(this.playerHandValue);
      console.log(this.dealerGets[1].value);
}

Blackjack.prototype.additionalCard = function() {
    if (this.dealersTurn == undefined) {
        this.playerGets.push(this.deck.deal());
    } else {
      this.dealerGets.push(this.deck.deal());
    }
}

Blackjack.prototype.stand = function() {
    this.dealersTurn = true; //flag that I am setting
}




// Blackjack.prototype.dealerCardValue = function() {
//   dealerGets.this.value => new Object this.dealerHandValue.reduce();
// }


module.exports = Blackjack

// if (this.playerGets.)


use pop to remove the last card
use reduce to combine to one number
