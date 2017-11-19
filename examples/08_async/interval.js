

let delay = 1 * 1000;
let message = `This message will be displayed each second`;

let intervalId = setInterval((message) => {
    console.log(message);
}, delay, message);

let timeoutDelay = 5 * 1000;
let timeoutMessage = 'Stop';

setTimeout((message) => {
    console.log(message);
    clearInterval(intervalId);
}, timeoutDelay, timeoutMessage);


