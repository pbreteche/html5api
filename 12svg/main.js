'use strict';

document.addEventListener('DOMContentLoaded', function(){
   const svgImage = document.querySelector('#Layer_1');

   svgImage.querySelector('.st2').addEventListener('click', function(){
       this.style.fill = 'blue';
   });
});