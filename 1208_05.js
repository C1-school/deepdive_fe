// setInterval((msg) => {
//     console.log(msg)
// }, 2000, 'tick tock');

// setInterval(
//     () => {
//         const now = new Date();
//         console.log(now.toLocaleTimeString());
//     }, 1000)

// const timerId = setInterval(()=> console.log('tick'), 1000);
// setTimeout(() => clearInterval(timerId), 5000);

let seconds = 0;
setInterval(() => {
    seconds += 1;
    console.log(`${seconds}초 경과`);
}, 1000, seconds)