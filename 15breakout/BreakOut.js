import {BreakOutModel} from "./BreakOutModel.js";
import {Renderer} from "./Renderer.js";

export class BreakOut {
    constructor(selector) {
        this.rootElement = document.querySelector(selector);
        this.init();
    }

    init() {
        this.model = BreakOutModel.generate();
        this.renderer = new Renderer(this.model, this.rootElement.getContext('2d'));
        this.renderer.draw();
        window.addEventListener('keyup', (ev) => {
            switch(ev.code) {
                case 'ArrowRight':
                    this.model.moveRight();
                    break;
                case 'ArrowLeft':
                    this.model.moveLeft();
                    break;
                case 'ArrowDown':
                    this.model.stop();
                    break;
                case 'Space':
                    this.model.playPause();
                    break;
            }
        });
    }

    tick() {
        setInterval(() => {
            try {
                this.model.stepForward();
            }
            catch(e) {
                console.log(e);
                this.init();
            }
            this.renderer.draw()
        }, 10);
    }
}