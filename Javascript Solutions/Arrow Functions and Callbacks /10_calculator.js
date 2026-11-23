const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;

const divide = (a, b) => {
  if (b === 0) return "Cannot divide by zero";
  return a / b;
};

const calculate = (a, b, operationCallback) =>
  operationCallback(a, b);

console.log(`Addition: ${calculate(20, 10, add)}`);
console.log(`Subtraction: ${calculate(20, 10, subtract)}`);
console.log(`Multiplication: ${calculate(20, 10, multiply)}`);
console.log(`Division: ${calculate(20, 10, divide)}`);