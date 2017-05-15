let Card = require('./Card');
let Deck = require('./Deck');

function Blackjack(player, dealer) {
    this.player = player;
    this.dealer = dealer;
    this.deck = new Deck;
    this.playerGets = [];
    this.dealerGets = [];
    this.playerCardValue = [];
    this.dealerCardValue = [];
}

Blackjack.prototype.gameStartsNow = function() {
    for (let i = 0; i < 2; i++) {
        this.playerGets.push(this.deck.deal());
        this.playerCardValue = this.playerGets.map(object => object.value);
        this.dealerGets.push(this.deck.deal());
        this.dealerCardValue = this.dealerGets.map(object => object.value);
        //cause i'm not asking for anything in return I don't need the let ... = this.dealer...etc
    }
      // console.log(this.dealerHandValue);
      // console.log(this.dealerGets[1].value);
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
Blackjack.prototype.combinedValue = function(accumulator, value) {
  return accumulator + value;
}

Blackjack.prototype.getDealerHandValue = function() {
  let dealerHandValue = this.dealerCardValue.reduce(this.combinedValue);
  console.log(dealerHandValue);
  if (dealerHandValue )
}


module.exports = Blackjack

// if (this.playerGets.)


// use pop to remove the last card
// use reduce to combine to one number
