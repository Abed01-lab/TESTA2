const assert = require("assert");
const { Given, When, Then } = require("@cucumber/cucumber");

function capitalizeString(string) {
  return string.toUpperCase();
}

Given("a user inputs {string} in lowercase", function (string) {
  this.string = string;
});

When("the user wants to capitalize the inputs", function () {
  this.actualAnswer = capitalizeString(this.string);
});

Then("the user should get {string} in capital", function (expectedAnswer) {
  assert.strictEqual(this.actualAnswer, expectedAnswer);
});

Given("a user inputs aBc", function () {
  // Write code here that turns the phrase above into concrete actions
  this.string = "aBc";
});

When("he wants to turn input into all capital letters", function () {
  this.actualAnswer = capitalizeString(this.string);
});

Then("the output must be {string}", function (expectedAnswer) {
  assert.strictEqual(this.actualAnswer, expectedAnswer);
});
