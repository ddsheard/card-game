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
    }
}

// Blackjack.prototype.additionalCards = function(){
//   for (let i = 0; i < 2; i++) {
//    this.playerGets.push(this.deck.deal());
// }

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
