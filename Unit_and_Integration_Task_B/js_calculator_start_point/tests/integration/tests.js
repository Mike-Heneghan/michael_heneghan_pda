var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
var expect = chai.expect;

describe('calculator functionality', function() {
  beforeEach(function() {
    browser.ignoreSynchronization = true;
    browser.get('http://localhost:3000');
  });

  // write integration tests here in the form of "it should do something..."
  it('should have working number buttons', function(){
    running_total = element(by.css('#running_total'))
    element(by.css('#number2')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('2')
  });

  it('should be able to update running total by selecting number buttons', function (){
    running_total = element(by.css('#running_total'))
    element(by.css('#number7')).click();
    element(by.css('#number2')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('72')
  });

  it('should be able to use + arithmetical operations to update the display', function() {
    running_total = element(by.css('#running_total'))
    element(by.css('#number7')).click();
    element(by.css('#operator_add')).click();
    element(by.css('#number2')).click();
    element(by.css('#operator_equals')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('9')
  });

  it('should be able to string multiple operations', function() {
    running_total = element(by.css('#running_total'))
    element(by.css('#number7')).click();
    element(by.css('#operator_add')).click();
    element(by.css('#number2')).click();
    element(by.css('#operator_subtract')).click();
    element(by.css('#number4')).click();
    element(by.css('#operator_multiply')).click();
    element(by.css('#number4')).click();
    element(by.css('#operator_divide')).click();
    element(by.css('#number5')).click();
    element(by.css('#operator_equals')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('4')
  });

  it('should be able to accurately calculate with negative numbers', function(){
    running_total = element(by.css('#running_total'))
    element(by.css('#number7')).click();
    element(by.css('#operator_subtract')).click();
    element(by.css('#number9')).click();
    element(by.css('#operator_equals')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('-2')
  });

  it('should be able to complete calculations with decimals', function() {
    running_total = element(by.css('#running_total'))
    element(by.css('#number7')).click();
    element(by.css('#operator_divide')).click();
    element(by.css('#number2')).click();
    element(by.css('#operator_equals')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('3.5')
  });

  it('should be able to complete calculations with very large numbers', function() {
    running_total = element(by.css('#running_total'))
    element(by.css('#number7')).click();
    element(by.css('#number7')).click();
    element(by.css('#number7')).click();
    element(by.css('#number7')).click();
    element(by.css('#operator_multiply')).click();
    element(by.css('#number9')).click();
    element(by.css('#number9')).click();
    element(by.css('#operator_equals')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('769923')
  });
  //
  // xit('what is the effect of dividing by zero?', function() {
  //
  // });


});

// You should write tests to ensure:
//
// Do the number buttons work to update the display of the running total?
// Do each of the arithmetical operations work to update the display with the result of the operation?
// Can we chain multiple operations together?

// Does it work as expected for a range of numbers? (positive, negative, decimals, very large numbers)
// What does the code do in exceptional circumstances?
//
// If you divide by zero, what is the effect?
// Can you write a test to describe what you'd prefer to happen, and then correct the code to make that test pass.
