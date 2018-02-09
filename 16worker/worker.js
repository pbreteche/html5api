'use strict';

console.log(this);

addEventListener('message', ev => console.log(ev.data));

for (let i=2; i < 10; i++) {
    let isPrime = true;

    for(let divisor = 2; divisor < i; divisor++) {
        if (i % divisor === 0) {
            isPrime = false;
            break;
        }
    }
    if (isPrime) {
        postMessage(i);
    }
}