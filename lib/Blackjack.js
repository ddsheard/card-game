let Card = require('./Card');
let Deck = require('./Deck');

function Blackjack (player, dealer) {
  this.player = player;
  this.dealer = dealer;
  this.deck = new Deck;
  this.playerGets = [];
  this.dealerGets = [];
}

Blackjack.prototype.gameStartsNow = function (){
    for (let i = 0; i < 2; i++) {
     this.playerGets.push(this.deck.deal());
     this.dealerGets.push(this.deck.deal());
     //cause i'm not asking for anything in return I don't need the let....
    }
}

Blackjack.prototype.additionalCard = function(){
  if (this.dealersTurn == undefined) {
    this.playerGets.push(this.deck.deal());
  }
}

Blackjack.prototype.stand = function() {
  this.dealersTurn = true;//flag that I am setting
}

module.exports = Blackjack

// playerGets.push(this.deck.cards.shift())
// playerGets.push(this.deck.cards.shift())
//Blackjack.prototype.playersDelt


// Blackjack.prototype.playerGetsDealt = function (){
//   this.playerCards.push(this.deck.cards.shift());
// }

// Blackjack.prototype.dealerGetsDealt = function (){
//   this.playerCards.push(this.deck.cards.shift());
// }
