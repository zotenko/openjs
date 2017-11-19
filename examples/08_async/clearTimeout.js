

let delay = 3 * 1000;
let message = `This message will never shown.`;

let timeoutId = setTimeout((message) => {
    console.log(message);
}, delay, message);

console.log('timeoutId', timeoutId);

clearTimeout(timeoutId);


