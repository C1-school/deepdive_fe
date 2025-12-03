const user = {
    name: 'ghost',
    age: 500
}

console.log('name' in user);
console.log('mbti' in user);

for (const key in user) {
    console.log(`${key}: ${user[key]}`);
}

const keys = Object.keys(user);
const values = Object.values(user);
const entries = Object.entries(user);

console.log(keys);
console.log(values);
console.log(entries);

const target = {a: 3, b: 2}
const source = {b: 3, c: 4, d: 5};

const total = {...target, ...source};
console.log('total : ', total);

const totalAssign = Object.assign(target, source);
console.log ('totalAssign : ', totalAssign);