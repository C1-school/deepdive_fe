const numbers = [25, 5, 3, 42, 10];
const result = numbers.reduce((acc, cur) => acc + cur, 0);
console.log(result)

const a = 3.141592;
const b = 'hello';

console.log(Number(a));
console.log(parseInt(a));
console.log(parseFloat(a));
console.log(Number(b));

const sum = (a, b) => a + b;
const divide = (a, b) => parseFloat((a / b).toFixed(2));

console.log(add(3, 5));
console.log(divide(10, 3));