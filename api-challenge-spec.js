const axios = require('axios');
const { expect } = require('chai');

describe('CardPicker', async function() {
    it('should generate a deck, draw 2 cards, and verify', async function() {
        const newDeck = await axios.get('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1');

        //assign deckID to variable
        const deckID = newDeck.data.deck_id;

        //draw two cards
        const url = 'https://deckofcardsapi.com/api/deck/' + deckID + '/draw/?count=2';
        const drawTwo = await axios.get(url);

        //verify request was successful
        expect (drawTwo.data.success).to.equal(true);

        //verify that response deckID matches request
        expect (drawTwo.data.deck_id).to.equal(deckID);

        //verify that 50 cards remain
        expect (drawTwo.data.remaining).to.equal(50);

    });
});