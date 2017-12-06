const greet = require("./greeting.js");

test("functionShouldReturnHelloWorld",() => {
  expect(greet.greet()).toBe("Hello WORLD!");
});

test("functionShouldReturnEmmanuel",() => {
  expect(greet.greet("Emmanuel")).toBe("Hello EMMANUEL!");

});
