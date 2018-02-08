'use strict';

import { Student } from './Student.js';
import { SvgGenerator } from './SvgGenerator.js';


document.addEventListener('DOMContentLoaded', function(){
    const appElement = document.querySelector('.app');
    let student;

    Student.createFromJson('notes-data.json').then(data => {
        student = data;
        console.log('async', student);
        appElement.innerHTML = SvgGenerator.generate(student);
        appElement.querySelectorAll('.note').forEach(bar =>
            bar.addEventListener('click', () => console.log(bar.dataset.subject, bar.dataset.note))
        )
    });
});