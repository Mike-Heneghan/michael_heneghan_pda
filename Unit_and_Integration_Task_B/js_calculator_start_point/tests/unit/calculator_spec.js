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

  it('should be able to divide numbers', function() {
    calculator.previousTotal = 23.67;
    calculator.divide(1.2);
    const actual = calculator.runningTotal;
    assert.strictEqual(actual, 19.725);
  });

  it('should be able to take two numbers and concatenate them', function() {
    calculator.numberClick(2);
    const actualOne = calculator.runningTotal;
    assert.strictEqual(actualOne, 2);

    calculator.numberClick(8);
    const actualTwo = calculator.runningTotal;
    assert.strictEqual(actualTwo, 28);
  });

  it('should be able to use the operator symbols and user selected numbers to complete calculations', function() {
      calculator.numberClick(5.56);
      calculator.operatorClick('+');
      calculator.numberClick(6.29);
      calculator.operatorClick('=');
      const actual = calculator.runningTotal;
      assert.strictEqual(actual, 11.85);
  });

  it('should be able to complete a calculation and then clear total', function(){
    calculator.numberClick(5.56);
    calculator.operatorClick('+');
    calculator.numberClick(6.29);
    calculator.operatorClick('=');
    const actualOne = calculator.runningTotal;
    assert.strictEqual(actualOne, 11.85);

    calculator.clearClick()
    const actualTwo = calculator.runningTotal;
    assert.strictEqual(actualTwo, 0);
  });

});


// calculator.numberClick()
// calculator.operatorClick()
// calculator.clearClick()
