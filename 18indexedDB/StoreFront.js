export class StoreFront {
    constructor(selector) {
        this.root = document.querySelector(selector);
    }

    display(products) {
        let list = '';

        for (const product of products) {
            list += `<li>${product.name}</li>`;
        }
        this.root.innerHTML = `<ul>${list}</ul>`;
    }
}