'use strict';

document.addEventListener('DOMContentLoaded', function(){
    const draggableDiv = document.querySelector('.draggable');
    const dropZone = document.querySelector('.drop-zone');

    draggableDiv.addEventListener('dragstart', function(event){
        event.dataTransfer.setData('text', this.textContent);
    });

    dropZone.addEventListener('dragover', function(event){
        this.style.backgroundColor = 'yellow';
        event.preventDefault();
    });

    dropZone.addEventListener('dragout', function(){
        this.style.backgroundColor = 'white';
    });

    dropZone.addEventListener('drop', function(event){
        event.preventDefault();
        const textFromElement = event.dataTransfer.getData('text');
        this.style.backgroundColor = 'white';
        this.textContent = textFromElement;
    });
});
