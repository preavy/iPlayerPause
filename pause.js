/*jslint browser: true */

document.onkeydown = function (e) {
    'use strict';

    var play,
        pause,
        whatToClick;

    play = document.getElementsByClassName('media-player--playlink')[0];
    pause = document.
        getElementById('media-player-empjumpMediaPlayerLink');

    if (e.keyCode === 80) {
        whatToClick = play || pause;
        whatToClick.click();
    }
};
