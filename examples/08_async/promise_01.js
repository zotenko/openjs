
function tossCoin() {
    return new Promise((resolve, reject) => {
        let delay = 1 * 1000;
    
        setTimeout(() => {
            let coin = !!(Math.floor(Math.random() * 100) % 2);
            resolve(coin);
        }, 500);
    });
}

tossCoin()
    .then((result) => {
        console.log(result);
    });

console.log(new Promise(() => {}));