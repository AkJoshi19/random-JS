const numbers = [10, 20, 30, 40] // sums to 100
// function for adding two numbers. Easy!
const add = (a, b) =>
  a + b
// use reduce to sum our array
const sum = numbers.reduce(add);
console.log(sum);

