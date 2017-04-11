let Card = require('./Card');
let Deck = require('./Deck');

function Blackjack (player, dealer) {
  this.player = player;
  this.dealer = dealer;
  this.deck = new Deck;
  // this.playerGets = [];
  // this.dealerGets = [];
}

// Blackjack.prototype.playerGetsDealt = function (){
//   this.playerCards.push(this.deck.cards.shift());
// }
//
// Blackjack.prototype.dealerGetsDealt = function (){
//   this.playerCards.push(this.deck.cards.shift());
// }

Blackjack.prototype.gameStartsNow = function (){
    i=0; i<2; i++;
    this.playerGetsDealt();
    this.dealerGetsDealt();
  // playerGets.push(this.deck.cards.shift())
}

module.exports = Blackjack

// playerGets.push(this.deck.cards.shift())
// playerGets.push(this.deck.cards.shift())
//Blackjack.prototype.playersDelt
