'use strict';

import { Gallery } from './Gallery.js';

document.addEventListener('DOMContentLoaded', function(){
    const dropZone = document.querySelector('.drop-zone');
    const gallery = new Gallery('.gallery');

    dropZone.addEventListener('dragover', function(event){
        event.preventDefault();
    });

    dropZone.addEventListener('dragout', function(){
    });

    dropZone.addEventListener('drop', function(event){
        event.preventDefault();
        for (const file of event.dataTransfer.files) {
            const reader = new FileReader();
            reader.addEventListener('load', function(e){
                gallery.add(file.name, e.target.result);
            });
            reader.readAsDataURL(file);
        }
    });
});
