const phoneNumber = '01012345678'
const result1 = '*'.repeat(phoneNumber.length-4) + phoneNumber.slice(-4);
console.log(result1);


const scores = [25, 32, 40, 15]
const result2 = scores.reduce((acc, cur) => acc + cur) / scores.length;
console.log(result2);

const myScores = {
    math : 90,
    english : 80,
    science : 70,
}


const arrScores = Object.values(myScores)
const result3 = arrScores.reduce((acc, cur) => acc + cur);
console.log(result3);