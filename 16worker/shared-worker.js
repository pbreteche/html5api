'use strict';

console.log(this);

onconnect =  function (ev) {
    const port = ev.port[0];

    console.log(ev);

    port.addEventListener('message', ev => {
        console.log(port, ev.data)
    });

    port.start();

    for (let i=2; i < 10; i++) {
        let isPrime = true;

        for(let divisor = 2; divisor < i; divisor++) {
            if (i % divisor === 0) {
                isPrime = false;
                break;
            }
        }
        if (isPrime) {
            port.postMessage(i);
        }
    }
};
