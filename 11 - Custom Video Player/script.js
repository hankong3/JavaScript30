const player = document.querySelector('.player');
const video = document.querySelector('.viewer');
const progress = document.querySelector('.progress');
const progressBar = document.querySelector('.progress__filled');
const toggle = document.querySelector('.toggle');
const ranges = document.querySelectorAll('.player__slider');
const skipButtons = document.querySelectorAll('[data-skip]');

function togglePlay() {
    const control = video.paused ? 'play' : 'pause';
    video[control]();
}

function toggleButton() {
    const icon = video.paused ? '►' : '❚ ❚';
    toggle.textContent = icon;
}

function handleCurrentTime() {
    const percent = (video.currentTime / video.duration) * 100;
    progressBar.style.flexBasis = `${percent}%`;
}

function skip() {
    // parseFloat()는 문자열을 실수로 변환
    video.currentTime += parseFloat(this.dataset.skip);
}

function handleRange() {
    video[this.name] = this.value;
}

function handleProgress(e) {
    const updateTime = (e.offsetX / progress.offsetWidth) * video.duration;
    video.currentTime = updateTime;
}

video.addEventListener('click', togglePlay);
video.addEventListener('play', toggleButton);
video.addEventListener('pause', toggleButton);
video.addEventListener('timeupdate', handleCurrentTime);

toggle.addEventListener('click', togglePlay);
skipButtons.forEach(button => button.addEventListener('click', skip));
ranges.forEach(range => range.addEventListener('mousemove', handleRange));
ranges.forEach(range => range.addEventListener('change', handleRange));

let mouseDown = false;
progress.addEventListener('click', handleProgress);
progress.addEventListener('mousemove', (e) => mouseDown && handleProgress(e));
progress.addEventListener('mousedown', () => mouseDown = true);
progress.addEventListener('mouseup', () => mouseDown = false);