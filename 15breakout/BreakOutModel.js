export class BreakOutModel {
    static generate() {
        const model = new BreakOutModel();
        model.bricks = new Array(12).fill(new Array(4).fill(true));
        model.board = { start: 400, width: 200, speed: 0 };
        model.ball = { x: 500, y: 700, speed: 0, direction: -Math.PI/2 };

        return model;
    }

    stepForward() {
        this.board.start = Math.min(
            Math.max(this.board.start + this.board.speed, 150),
            750
        );
        this.ball.x += this.ball.speed * Math.cos(this.ball.direction);
        this.ball.y += this.ball.speed * Math.sin(this.ball.direction);
        if (this.ball.y < 200 ) {
            this.ball.direction = (this.ball.direction + Math.PI) % (2 * Math.PI)
        }
        if (this.ball.y > 700 ) {
            if (this.ball.x < this.board.start) {
                throw 'Perdu !'
            }
            if (this.ball.x > this.board.start + this.board.width) {
                throw 'Perdu !'
            }
            this.ball.direction = (this.ball.direction + Math.PI) % (2 * Math.PI);
        }
    }

    moveRight() {
        this.board.speed = 5;
    }


    moveLeft() {
        this.board.speed = -5;
    }

    stop() {
        this.board.speed = 0;
    }

    playPause() {
        if (this.ball.speed === 0) {
            this.ball.speed = 10;
        }
        else {
            this.ball.speed = 0;
        }

    }
}