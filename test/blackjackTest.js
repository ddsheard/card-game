// Aspects of Blackjack to Model
//
//   - A game (for our purposes) has one player and a dealer
//   - At the start of the game, the player gets two cards and so does the dealer
//   - The player can ask for another card
//   - The player can repeat that request as many times as desired
//   - Once the player doesn't want any more cards, the dealer will ask for more cards until the dealer's hand is worth at least 17
//   - For today, assume that an Ace is worth 1, a face card (Jack, Queen, or King) is worth 10, and any other card is worth its number


const assert = require('assert');
const Deck = require('../lib/Deck');
const Card = require('../lib/Card');
const Blackjack = require('../lib/Blackjack');

describe('Blackjack', function (){
  it('has a player', function () {
    let game = new Blackjack('Monkey');
    assert.equal(game.player, 'Monkey');
  });
  it('has a dealer', function(){
    let game = new Blackjack('Monkey', 'Giraffe');
    assert.equal(game.dealer, 'Giraffe')
  });
  it('has a deck of cards', function(){
    let game = new Blackjack('Monkey', 'Giraffe');
    assert(52, game.deck.cards.length);
  })
});

describe('#gameStartsNow()', function() {
  it('player gets two cards', function (){
    let game = new Blackjack ('Monkey', 'Giraffe');
    let gameStartsNow = game.gameStartsNow();//starts game
    assert.equal(game.player, 'Monkey');
    // assert.equal(50, game.cards.length);
  });
  it('dealer gets two cards', function(){
    let game = new Blackjack ('Monkey', 'Giraffe');
    let gameStartsNow = game.gameStartsNow();
    assert.equal(game.dealer, 'Giraffe');
  })
});


// describe(''), function() {
//   it('player asks for another card')
// }

  // let deck = new Deck
  //   assert.eqaul(#, deck.cards.length)
