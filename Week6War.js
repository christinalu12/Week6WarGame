//create card (class)
    //needs rank
    //needs suits 

class Card {
    constructor(rank, suit) {
        this.rank = rank;
        this.suit = suit;
    }
}

//create deck (class)
    //needs array of 52 cards
    //need suits array  defined
    //needs rank array defined
    //needs a shuffle method to shuffle deck
    //needs deck rank and suits defined
    //https://stackoverflow.com/questions/70726331/how-can-i-shuffle-an-array-of-objects-on-page-render-and-map-over-the-shuffled-a

class Deck {
    constructor() {
        this.cards = [];
        this.newDeck();
    }
    newDeck() {
        const suits = ['H', 'S', 'D', 'C'];
        const ranks = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
        for (let i = 0; i < suits.length; i++) { //i variable for suits
            for (let j = 0; j < ranks.length; j++) { //j variable is for ranks
                const card = new Card(ranks[j], suits[i]);
                this.cards.push(card);
            }
        }
    }
    shuffle() { //shuffle method from the link above and it works!!
        for (let i = this.cards.length -1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]];
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
            this.hand = []
            this.score = 0;
        }
        playCard(){
            return this.hand.shift();
        }
    }

//create Game class
    //creates 2 players
    //shuffles deck
    //deals 26 cards to each player
    //iterates through a loop where each player plays a card
    //compare ranks of cards and awards point for higher rank
    //if cards are = then both players get 0/tie
    //displays each player's score and declares a winner

class Game {
    constructor(){
        this.deck = new Deck();
        this.deck.shuffle();
        this.player1 = new Player('Player 1');
        this.player2 = new Player('Player 2');
        this.dealCards();
    }
    dealCards() {
        for (let i = 0; i < 26; i++) {
            this.player1.hand.push(this.deck.cards[i]);
            this.player2.hand.push(this.deck.cards[i + 26]);
        }
    }
    playRound() {
        const card1 = this.player1.playCard();
        const card2 = this.player2.playCard();
        if (card1.rank > card2.rank) {
            this.player1.score++;
        } else if (card2.rank > card1.rank) {
            this.player2.score++;
        }
    }
    playGame() {
        for (let i = 0; i < 26; i++) {
            this.playRound();
        }
        if (this.player1.score > this.player2.score) {
            //console.log ('Player 1 wins!'); testing
            alert('Player 1 wins!');
        } else if (this.player2.score > this.player1.score) {
            //console.log('Player 2 wins!');
            alert('Player 2 wins');
        } else {
            //console.log('Tie!');
            alert('Tie Game!')
        }
        //console.log(`Player 1: ${this.player1.score}`);
        //console.log(`Player 2: ${this.player2.score}`)
        alert(`Player 1: ${this.player1.score}\nPlayer 2: ${this.player2.score}`)
    }
}
//changed console logs to alerts to show winner and scores

const game = new Game();
game.playGame();
