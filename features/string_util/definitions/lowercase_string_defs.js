const assert = require("assert");
const { Given, When, Then } = require("@cucumber/cucumber");

function lowercaseString(string) {
  return string.toLowerCase();
}

Given("a user inputs {string} in uppercase", function (string) {
  this.string = string;
});

When("the user wants to lowercase the inputs", function () {
  this.actualAnswer = lowercaseString(this.string);
});

Then("the user should get {string} in lowercase", function (expectedAnswer) {
  assert.strictEqual(this.actualAnswer, expectedAnswer);
});
