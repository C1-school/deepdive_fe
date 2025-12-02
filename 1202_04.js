const users = [
  { name: "David", point: 50 },
  { name: "Juliet", point: 150 },
  { name: "Mike", point: 250 },
];

const vip = users.filter(user => user.point >= 100).map(vip => ({...vip, point: vip.point * 2}));
console.log(vip);


const obj1 = {name : 'ghost', age : 500};
const obj2 = {mbti : 'infj'};

const friend = {...obj1, ...obj2}; 
console.log('friend : ', friend);

const newFriend = {...friend, age : 1000}; 
console.log('friends : ', newFriend);