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

// These tests aren't specific enough.
  // it('should be able to add two numbers as selected by user', function() {
  //   calculator.numberClick(5.56);
  //   calculator.operatorClick('+');
  //   calculator.numberClick(6.29);
  //   calculator.operatorClick('=');
  //   const actual = calculator.runningTotal;
  //   assert.strictEqual(actual, 11.85);
  // });
  //
  // it('should be able to add multiple numbers as selected by user', function(){
  //   calculator.numberClick(0.937);
  //   calculator.operatorClick('+');
  //   calculator.numberClick(89.03);
  //   calculator.operatorClick('+');
  //   calculator.numberClick(45.7);
  //   calculator.operatorClick('=');
  //   const actual = calculator.runningTotal;
  //   assert.strictEqual(actual, 135.667);
  // });
  //
  // it('should be able to subtract two numbers', function() {
  //   calculator.numberClick(33.987);
  //   calculator.operatorClick('-');
  //   calculator.numberClick(16.78);
  //   calculator.operatorClick('=');
  //   const actual = calculator.runningTotal;
  //   assert.strictEqual(actual, 17.207);
  // });

  it('should be able to add two numbers', function() {
    calculator.previousTotal = 10.678;
    calculator.add(22.56);
    const actual = calculator.runningTotal;
    assert.strictEqual(actual, 33.238);
  });

  it('should be able to subtract one number from another', function() {
    calculator.previousTotal = 156.896;
    calculator.subtract(23.67);
    const actual = calculator.runningTotal;
    assert.strictEqual(actual, 133.226);
  });

  it('should be able to mulitply numbers', function(){
    calculator.previousTotal = 23.445;
    calculator.multiply(1.4);
    const actual = calculator.runningTotal;
    assert.strictEqual(actual, 32.823);
  });

});
