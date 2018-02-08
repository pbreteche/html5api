'use strict';

document.addEventListener('DOMContentLoaded', function () {
    console.log(window.location);
    console.log(navigator.geolocation);

    const output = document.querySelector('#output');

    console.debug(output);

    navigator.geolocation.getCurrentPosition(
        function (position) {
            output.textContent = `Vous êtes ici : ${position.coords.latitude} / ${position.coords.longitude}`;
        },
        function (error) {
            console.error(error);
        }
    )
});