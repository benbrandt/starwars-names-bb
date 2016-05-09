const expect = require('chai').expect;
const starWars = require('./index');

describe('starwars-names', () => {
  describe('all', () => {
    it('should be an array of strings', () => {
      function isArrayOfStrings(array) {
        return array.every(item => typeof item === 'string');
      }

      expect(starWars.all).to.satisfy(isArrayOfStrings);
    });

    it('should contain `Luke Skywalker`', () => {
      expect(starWars.all).to.include('Luke Skywalker');
    });
  });

  describe('random', () => {
    it('should return a random item from the starWars.all', () => {
      const randomItem = starWars.random();
      expect(starWars.all).to.include(randomItem);
    });
  });
});
