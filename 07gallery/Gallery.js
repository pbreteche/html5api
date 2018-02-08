
export class Gallery {
    constructor(selector) {
        this.element = document.querySelector(selector);
        this.data = new Map();
    }

    add(name, dataUri) {
        this.data.set(name, dataUri);
        this.draw();
    }

    draw() {
        let output = '';
        for (const [name, src] of this.data.entries()) {
            output += `<div>
<img src="${src}" alt="${name}" height="120"/>
<p contenteditable="true">${name.replace(/\.[^/.]+$/, '')}</p>
</div>`
        }
        this.element.innerHTML = output;
        const names = this.element.querySelectorAll('p[contenteditable]');
        for(const name of names) {
            name.addEventListener('blur', (event) => {
                console.log(event);
            });
        }
    }

}