setTimeout((name)=>{
    console.log(name);
}, 2000, 'Ghost')

const timerId = setTimeout(() => {
    console.log('실행되지 않음')
}, 5000);
clearTimeout(timerId);


function greeting (name, seconds) {
    console.log(`${name}님, ${seconds}초 후에 인사드립니다.`)
}
setTimeout(greeting, 5000,'시원', 5)