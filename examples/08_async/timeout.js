

let delay = 3 * 1000;
let message = `This message will be displayed in ${delay / 1000} seconds`;

let timeoutId = setTimeout((message) => {
    console.log(message);
}, delay, message);

console.log('timeoutId', timeoutId);


