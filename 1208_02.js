const nums = [1, 2, 3, 4, 5];
const sum = nums.reduce((acc, cur) => acc + cur, 0);
console.log(sum)

const cart = [ 
    { item : 'apple', price : 12900 },
    { item : 'banana', price : 4900 },
    { item : 'onion', price : 5200 },
]

const totalPrice = cart.reduce((acc, item) => acc + item.price, 0);
console.log(`장바구니 총액은 ${totalPrice}원 입니다.`);

const str = 'dog dog Dog';
// console.log(str.replace('dog', 'cat'));
console.log(str.replace(/dog/gi, 'cat'));

const str2 = 'Hello World';
console.log(str2.replace('World', 'Ghost'));
console.log(str2.slice(6, 9));
console.log(str2.slice(6));
console.log(str2.slice(-5));