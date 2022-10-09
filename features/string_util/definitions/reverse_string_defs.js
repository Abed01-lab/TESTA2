const assert = require("assert");
const { Given, When, Then } = require("@cucumber/cucumber");

function reverseString(string) {
  const splitted_string = string.split("").reverse();
  let reverse_string = "";
  for (const character of splitted_string) {
    reverse_string = reverse_string + character;
  }
  return reverse_string;
}

Given("a user inputs {string} in string", function (string) {
  this.string = string;
});

When("the user wants to reverse the inputs", function () {
  this.actualAnswer = reverseString(this.string);
});

Then("the user should get {string}", function (expectedAnswer) {
  assert.strictEqual(this.actualAnswer, expectedAnswer);
});
