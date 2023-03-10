//create card (class)
    //needs rank '2-14'
    //needs suits 'S, H, D, C'

class Card {
    constructor(rank, suit) {
        this.rank = rank;
        this.suit = suit;
    }
}

//create deck (class)
    //needs array of 52 cards
    //needs a shuffle method to shuffle deck

class Deck {
    constructor() {
        this.cards = [];
        this.newDeck();
    }
    newDeck() {
        const suits = ['Hearts', 'Diamonds', 'Clubs', 'Spades'];
        const ranks = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
        for (let i = 0; i < suits.length; i++) {
            console.log(suits[i]);
            for (let i = 0; i < ranks.length; i++) {
                const card = new Card(ranks, suits);
                this.cards.push(card);
            }
        }
    }
}

//create player class
    //player name
    //current score
    //add play method

    class Player {
        constructor(name) {
            this.name = name;
            this.hand - []
            this.score = 0;
        }
        playCard(){
            return this.hand.shift();
        }
    }

//create Game class
    //creates 2 players
    //creates deck
    //deals 26 cards to each player
    //iterates through a loop where each player plays a card
    //compare ranks of cards and award point for higher
    //if cards are = then both players get 0
const deck = new Deck();
deck.shuffle();

const player1 = new Player("Player 1");
const player2 = new Player("Player 2");

// Deal cards evenly between the two players
for (let i = 0; i < 26; i++) {
  player1.hand.push(deck.cards[i]);
  player2.hand.push(deck.cards[i + 26]);
}

//display final score and declare winner