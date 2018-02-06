
export class Gallery {
    constructor(selector) {
        this.element = document.querySelector(selector);
        this.data = new Map();
    }

    add(name, dataUri) {
        this.data.set(name, dataUri);
        let output = '';
        for (const [name, src] of this.data.entries()) {
            output += `<div>
<img src="${src}" alt="${name}" height="120"/>
<p>${name.replace(/\.[^/.]+$/, '')}</p>
</div>`
        }
        this.element.innerHTML = output;
    }

}