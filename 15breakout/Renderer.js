export class Renderer {
    constructor(model, context) {
        this.model = model;
        this.ctx = context;
    }

    draw() {
        this.ctx.clearRect(0, 0, 1024, 768);
        this.ctx.lineWidth = 25;
        this.ctx.lineCap = 'round';

        this.drawBackground();
        this.drawBricks(this.model.bricks);
        this.drawBoard(this.model.board);
        this.drawBall(this.model.ball);
    }

    drawBackground() {
        const c = this.ctx;
        c.strokeStyle = "rgb(255, 128, 0)";

        c.fillStyle = 'black';
        c.fillRect(0, 0, 1024, 768);
        c.beginPath();
        c.moveTo(25, 748);
        c.lineTo(25, 25);
        c.lineTo(999, 25);
        c.lineTo(999, 748);
        c.stroke();
    }

    drawBricks(bricks) {
        const c = this.ctx;
        c.strokeStyle = "rgb(178, 0, 64)";

        const brickWidth = 924 / bricks.length;
        const brickHeight = 30;
        let brickX = 64;
        let brickY = 64;

        for (const column of bricks) {
            for (const b of column) {
                c.beginPath();
                c.moveTo(brickX, brickY);
                c.lineTo(brickX + brickWidth * .5, brickY);
                c.stroke();
                brickY += brickHeight;
            }
            brickY = 64;
            brickX += brickWidth;
        }

    }

    drawBoard(board) {
        const c = this.ctx;
        c.strokeStyle = "rgb(0, 0, 255)";

        c.beginPath();
        c.moveTo(board.start, 730);
        c.lineTo(board.start + board.width, 730);
        c.stroke();
    }

    drawBall(ball) {
        const c = this.ctx;
        c.strokeStyle = "rgb(178, 255, 64)";

        c.beginPath();
        c.moveTo(ball.x, ball.y);
        c.lineTo(ball.x, ball.y);
        c.stroke();
    }
}