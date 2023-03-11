var expect = chai.expect;

describe('Card', function() {
  it('should create a card with the given rank and suit', function() {
    const card = new Card(10, 'H');
    expect(card.rank).to.equal(10);
    expect(card.suit).to.equal('H');
  });
});

