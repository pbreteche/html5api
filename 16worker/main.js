'use strict';

const myWorker = new Worker('worker.js');

myWorker.addEventListener('message', function(ev){
    console.log('dedicated', ev.data);
});

myWorker.postMessage('merci');

const ourWorker = new SharedWorker('shared-worker.js');

ourWorker.port.addEventListener('message', function(ev){
    console.log('shared', ev.data);
});

ourWorker.port.start();

ourWorker.port.postMessage('merci aussi');

