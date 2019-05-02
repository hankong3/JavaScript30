const player = document.querySelector('.player');
const video = document.querySelector('.viewer');
const progress = document.querySelector('.progress');
const progressBar = document.querySelector('.progress__filled');
const toggle = document.querySelector('.toggle');
const ranges = document.querySelectorAll('.player__slider');
const skipButtons = document.querySelectorAll('[data-skip]');

function togglePlay() {
    /* if (video.paused) {
        video.play();
    } else {
        video.pause();
    } */
    const method = video.paused ? 'play' : 'pause';
    video[method]();
}

video.addEventListener('click', togglePlay);
toggle.addEventListener('click', togglePlay);