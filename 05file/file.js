'use strict';

document.addEventListener('DOMContentLoaded', function(){
   const demoRoot = document.querySelector('#file-api-demo');
   const displayDiv = demoRoot.querySelector('.display');
   demoRoot.querySelector('[type=file]').addEventListener('change', function(){
       const inputFile = this.files[0];
       const reader = new FileReader();

       displayDiv.textContent = `${inputFile.name} : ${inputFile.size}o\n=============\n`;

       reader.addEventListener('load', (e) => {
           displayDiv.textContent += e.target.result;
       });

       reader.readAsText(inputFile, 'utf-8');
   });
});