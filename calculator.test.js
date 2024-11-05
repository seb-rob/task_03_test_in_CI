// calculator.test.js

const { add, subtract, multiply, divide } = require("./calculator");

describe("Calculator Tests", () => {
  test("adds two numbers", () => {
    expect(add(2, 3)).toBe(5);
  });

  test("subtracts two numbers", () => {
    expect(subtract(5, 3)).toBe(2);
  });

  test("multiplies two numbers", () => {
    expect(multiply(2, 3)).toBe(6);
  });

  test("divides two numbers", () => {
    expect(divide(6, 3)).toBe(2);
  });

  test("throws error when dividing by zero", () => {
    expect(() => divide(6, 0)).toThrow("Cannot divide by zero");
  });
});
