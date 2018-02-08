'use strict';

import {BreakOut} from "./BreakOut.js";

document.addEventListener('DOMContentLoaded', function(){
    const game = new BreakOut('#breakout');

    game.tick();
});
