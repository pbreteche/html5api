'use strict';

document.addEventListener('DOMContentLoaded', function(){
    const ctx1 = document.querySelector('#my-canvas1').getContext('2d');

    ctx1.fillStyle = 'salmon';
    ctx1.strokeStyle = 'blue';
    ctx1.lineWidth = 2;
    ctx1.fillRect(10, 10, 390, 290);
    ctx1.strokeRect(10, 10, 390, 290);

    const ctx2 = document.querySelector('#my-canvas2').getContext('2d');

    ctx2.beginPath();
    ctx2.arc(75, 75, 50, 0, Math.PI * 2, true); // Outer circle
    ctx2.moveTo(110, 75);
    ctx2.arc(75, 75, 35, 0, Math.PI, false);  // Mouth (clockwise)
    ctx2.moveTo(65, 65);
    ctx2.arc(60, 65, 5, 0, Math.PI * 2, true);  // Left eye
    ctx2.moveTo(95, 65);
    ctx2.arc(90, 65, 5, 0, Math.PI * 2, true);  // Right eye
    ctx2.stroke();

    const ctx3 = document.querySelector('#my-canvas3').getContext('2d');
// Clear any existing content in the canvas.
    ctx3.clearRect(0, 0, 400, 300);
// Set the stroke color and the fill color.
    ctx3.strokeStyle = "rgb(0, 0, 255)";
    ctx3.fillStyle = "rgba(255, 0, 0, 0.75)";
// Create a path in absolute coordinates.
    ctx3.beginPath();
    ctx3.moveTo(60, 30);
    ctx3.lineTo(100, 90);
    ctx3.lineTo(20, 90);
// Close the path.
    ctx3.closePath();
// Draw the path as a stroked shape;
    ctx3.stroke();
// Draw the path as a filled shape.
    ctx3.fill();


    const ctx4 = document.querySelector('#my-canvas4').getContext('2d');
    const myImage = new Image();
    myImage.addEventListener('load', function(){
        ctx4.drawImage(myImage, 15, 40);
        ctx4.fillStyle = "rgba(255, 255, 255, .2)";
        ctx4.save();
        ctx4.translate(200, 150);
        ctx4.rotate(Math.PI * .75);
        ctx4.fillStyle = "rgba(128, 255, 0, .5)";
        ctx4.fillRect(50, 50, 100, 100);
        ctx4.restore();
        ctx4.fillRect(50, 50, 300, 200);
        ctx4.font = '48px serif';
        ctx4.fillStyle = 'red';
        ctx4.fillText('Hello world', 60, 120);
    });
    myImage.src = 'Chou_saucisse_Morteau.jpg';

});