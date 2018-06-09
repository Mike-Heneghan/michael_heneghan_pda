var Calculator = require('../../public/js/calculator.js')
var assert = require('assert')

describe('calculator', function () {
  beforeEach(function () {
    calculator = new Calculator()
  });

  // write unit tests here in the form of "it should do something..."
  it('it has a sample test', function(){
    assert.equal(true, true)
  });

  it('should be able to add two numbers', function() {
    calculator.numberClick(5.56);
    calculator.operatorClick('+');
    calculator.numberClick(6.29);
    calculator.operatorClick('=');
    const actual = calculator.runningTotal;
    assert.equal(actual, 11.85);
  });

  // it('should be able to subtract two numbers', )

});
