// Aspects of Blackjack to Model

//   - the dealer will ask for more cards until the dealer's hand is worth at least 17
//   - For today, assume that an Ace is worth 1, a face card (Jack, Queen, or King) is worth 10, and any other card is worth its number

// COMPLETED
//1. A game (for our purposes) has one player and a dealer
//2. At the start of the game, the player gets two cards and so does the dealer
//3. The player can ask for another card
//------ The player can repeat that request as many times as desired
//4. Once the player doesn't want any more cards, ...


const assert = require('assert');
const Deck = require('../lib/Deck');
const Card = require('../lib/Card');
const Blackjack = require('../lib/Blackjack');

//Assigning a player and a dealer
describe('Blackjack', function() {
    let game;
    beforeEach(function() {
        game = new Blackjack('Chaudia', 'Jasmine');
    });
    it('has a player', function() {
        assert.equal(game.player, 'Chaudia');
    });
    it('has a dealer', function() {
        assert.equal(game.dealer, 'Jasmine');
    });

    it('has a deck of cards', function() {
        assert(game.deck.cards.length, 52);
    })

    //Each player gets dealt two cards
    describe('#gameStartsNow()', function() {
        it('player gets two cards', function() {
            game.gameStartsNow(); //starts game
            assert.equal(game.playerGets.length, 2); //test player got two cards
        });
        it('dealer gets two cards', function() {
            game.gameStartsNow();
            assert.equal(game.dealerGets.length, 2);
        })
    });

    //The player can ask for another card
    describe('#additionalCard', function() {
        it('player would like an additional card', function() {
            game.gameStartsNow();
            game.additionalCard();
            assert.equal(game.playerGets.length > 2, true)
        })
    })

    //Player doesn't want anymore cards >Stand
    describe('#custersLastStand', function() {
        it("player doesn't want anymore cards", function() {
            game.gameStartsNow();
            game.stand();
            assert(game.dealersTurn);
        })
    })

    // Dealer asks for more cards
    describe('#dealerContinues', function() {
        it('dealer would like to continue to receive cards until hand value is at <= 17', function() {
            game.gameStartsNow();
            game.additionalCard();
            game.getDealerHandValue();
            // assert.equal(game.dealerCardValue <=17);
        })
    })
});
