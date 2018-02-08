'use strict';

let visitTotalCount = window.localStorage.getItem('total-count');
if (visitTotalCount === null) {
    visitTotalCount = 0;
}


let visitCurrentCount = window.sessionStorage.getItem('current-count');
if (visitCurrentCount === null) {
    visitCurrentCount = 0;
}

window.localStorage.setItem('total-count', ++visitTotalCount);
window.sessionStorage.setItem('current-count', ++visitCurrentCount);