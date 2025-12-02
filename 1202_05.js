const users = [
  { name: "Alice", score: 75 },
  { name: "Bob", score: 90 },
  { name: "Charlie", score: 85 },
];

const passedUser = users.filter(user => user.score >= 80).map(passed => passed.name)
console.log(passedUser)