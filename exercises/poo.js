"use strict";

const assert = require("assert");

class BankCustomer {
  constructor(name, pin) {
    this.name = name;
    let pinTrue = "3579";
    this.verifyPinInput = () => {
      return pin === pinTrue ? true : false;
    };
  }
  getName() {
    return this.name;
  }
}

// Tests
const customer = new BankCustomer("John Doe", "3579");
assert.equal(typeof customer.getName, "function");
assert.equal(typeof customer.verifyPinInput, "function");
assert.equal(customer.getName(), "John Doe");
assert.ok(customer.verifyPinInput("3579"));
