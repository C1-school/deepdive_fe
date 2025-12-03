const person = {
    name: 'ghost',
    age: 20,
    mbti: null,
}

console.log(Object.keys(person).length);

console.log(Object.values(person).includes(null));

const tasks = [
    { id: 1, text: 'walk'},
    { id: 2, text: 'running'},
]

const newTask = { id: 3, text: 'programming'};

const finalTask = [...tasks, newTask];
console.log(finalTask)