'use strict';

import { Product } from './Product.js';
import { StoreFront } from './StoreFront.js';

document.addEventListener('DOMContentLoaded', function() {
    const request = window.indexedDB.open('LeNomDeMaBase', 42);
    const storeFront = new StoreFront('.app');

    request.addEventListener('upgradeneeded', ev => {
        const db = ev.target.result;

        const productStore = db.createObjectStore('product', { keyPath: 'name' });
        console.log('creation de la boutique');

        const productData = [
            new Product('stylo'),
            new Product('brosse à dents'),
            new Product('café'),
            new Product('balai')
        ];

        productStore.transaction.addEventListener('complete', ev => {
            console.log('transaction complete', ev);
            const productObjectStore = db.transaction('product', 'readwrite').objectStore('product');
            for (const product of productData) {
                productObjectStore.add(product);
            }
        });
    });

    const productData = [];

    request.addEventListener('success', ev => {
        console.log('success', ev.target.result);
        const db = ev.target.result;
        const productStore = db.transaction('product').objectStore('product');
        productStore.openCursor().addEventListener('success', ev => {
            const cursor = ev.target.result;
            if (cursor) {
                productData.push(Object.assign(new Product(''), cursor.value));
                cursor.continue();
            }
            else {
                storeFront.display(productData);
            }
        });
    });
    request.addEventListener('error', ev => {
        console.log('error', ev)
    });
});

