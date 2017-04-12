// Aspects of Blackjack to Model

//   - The player can ask for another card
//   - The player can repeat that request as many times as desired
//   - Once the player doesn't want any more cards, the dealer will ask for more cards until the dealer's hand is worth at least 17
//   - For today, assume that an Ace is worth 1, a face card (Jack, Queen, or King) is worth 10, and any other card is worth its number

// COMPLETED
//1. A game (for our purposes) has one player and a dealer
//2. At the start of the game, the player gets two cards and so does the dealer


const assert = require('assert');
const Deck = require('../lib/Deck');
const Card = require('../lib/Card');
const Blackjack = require('../lib/Blackjack');

//Assigning a player and a dealer
describe('Blackjack', function (){
  it('has a player', function () {
    let game = new Blackjack('Chaudia');
    assert.equal(game.player, 'Chaudia');
  });
  it('has a dealer', function(){
    let game = new Blackjack('Chaudia', 'Jasmine');
    assert.equal(game.dealer, 'Jasmine')
  });
  it('has a deck of cards', function(){
    let game = new Blackjack('Chaudia', 'Jasmine');
    assert(52, game.deck.cards.length);
  })
});

//Each player gets dealt two cards
describe('#gameStartsNow()', function() {
  it('player gets two cards', function(){
    let game = new Blackjack ('Chaudia', 'Jasmine');
    let gameStartsNow = game.gameStartsNow();//starts game
    assert.equal(game.playerGets.length, 2);//test player got two cards
  });
  it('dealer gets two cards', function(){
    let game = new Blackjack ('Chaudia', 'Jasmine');
    let gameStartsNow = game.gameStartsNow();
    assert.equal(game.dealerGets.length, 2);
  })
});

//   - The player can ask for another card
describe('#additionalCards', function(){
  it('player would like two additional cards', function(){
    let game = new Blackjack ('Chaudia', 'Jasmine');
    assert.equal(game.playerGets.length, 4)
  })
})


//Give me another please
// describe('#twoMorePlease'), funciton(){
//   it('player needs two more cards' function(){
//     let game = new Card
//   })
// }



// describe(''), function() {
//   it('player asks for another card')
// }

  // let deck = new Deck
  //   assert.eqaul(#, deck.cards.length)
