// 1. users 배열에서 모든 사용자의 이름만 배열로 추출하세요.
const users = [
  { name: "Ghost", age: 20 },
  { name: "Irangi", age: 22 },
  { name: "Camel", age: 19 },
];

const answer1 = users.map(user => user.name)
console.log('[1]', answer1);


//2. user 객체를 복사하여 age만 30으로 바꾼 새 객체를 만드세요.
const user = { name: "Ghost1", age: 20 };

const answer2 = {...user, age: 30};
console.log('[2]', answer2);


// 3. person 객체에 동적으로 key와 value를 추가하세요.
// (key: hobby, value: soccer)
const person = { name: "Ghost2", age: 500 };

const answer3 = {...person, hobby: 'soccer'};
console.log('[3]', answer3);


// 4. person의 name값을 출력하세요
const answer4 = person.name
console.log('[4]', answer4);


// 5. 두 객체 obj1, obj2를 합쳐서 새 객체를 만드세요.
const obj1 = { a: 1 };
const obj2 = { b: 2 };

const answer5 = {...obj1, ...obj2};
console.log('[5]', answer5);