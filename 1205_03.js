const now = new Date();

const year = now.getFullYear();
// 0부터 11까지
const month = now.getMonth() + 1;
const date = String(now.getDate()).padStart(2, '0');
// 0-일, 1-월, 2-화, 3-수, 4-목, 5-금, 6-토
const day = now.getDay();

console.log(`${year}년 ${month}월 ${date}일, 요일 ${day}`);


const hours = now.getHours();
const minutes = now.getMinutes();
const seconds = now.getSeconds();


console.log(`${hours}시 ${minutes}분 ${seconds}초`);

console.log(now.toLocaleDateString());
console.log(now.toLocaleTimeString());

console.log(Date.now());