'use strict';

window.addEventListener('load', function () {
    const playButton = document.querySelector('#play');
    const muteButton = document.querySelector('#mute');
    const volumeSlider = document.querySelector('#volume');
    const progressBar1 = document.querySelector('#progress1');
    const progressBar2 = document.querySelector('#progress2');
    const durationInfo = document.querySelector('#duration');
    const fullscreenButton = document.querySelector('#fullscreen');
    const myVideo = document.querySelector('video');

    let progressBarSync;

    fullscreenButton.addEventListener('click', function(){
        myVideo.mozRequestFullScreen();
    });

    progressBar2.max = myVideo.duration;
    myVideo.addEventListener('timeupdate', function(){
       progressBar2.value = myVideo.currentTime;
    });

    volumeSlider.addEventListener('change', function () {
        myVideo.volume = volumeSlider.value / 100;
    });

    const playPause = function () {
        if (myVideo.paused) {
            myVideo.play();
            this.textContent = '❚❚';
            progressBarSync = setInterval(function (){
                progressBar1.value = myVideo.currentTime / myVideo.duration * 100;
                durationInfo.textContent = `${myVideo.currentTime} / ${myVideo.duration}`
            }, 100);
        }
        else {
            myVideo.pause();
            this.textContent = '▶';
            clearInterval(progressBarSync)
        }
    };

    playButton.addEventListener('click', playPause);
    myVideo.addEventListener('keyup', function(ev){
        if (ev.code === 'Space') {
            playPause();
        }
    });

    muteButton.addEventListener('click', function () {
        if (myVideo.muted) {
            myVideo.muted = false;
            this.textContent = '🕪';
        }
        else {
            myVideo.muted = true;
            this.textContent = '🕨';
        }
    })
});