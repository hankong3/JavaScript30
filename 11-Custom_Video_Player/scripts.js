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

function updateButton() {
    const icon = this.paused ? '►' : '❚ ❚';
    toggle.textContent = icon;
}

function skip() {
    // parseFloat() 함수는 문자열을 분석해 부동소수점 실수로 반환.
    video.currentTime += parseFloat(this.dataset.skip);
}

function rangeUpdate() {
    video[this.name] = this.value;
}

function handleProgress() {
    const percent = (video.currentTime / video.duration) * 100;
    progressBar.style.flexBasis = `${percent}%`;
}

function scrub(e) {
    const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
    video.currentTime = scrubTime;
}

video.addEventListener('click', togglePlay);    // 화면 클릭 시 비디오 재생 & 일시정지
video.addEventListener('play', updateButton);   // 비디오 재생 시 아이콘 업데이트
video.addEventListener('pause', updateButton);  // 비디오 일시정지 시 아이콘 업데이트
video.addEventListener('timeupdate', handleProgress);   // 비디오 재생바 싱크 맞춤

toggle.addEventListener('click', togglePlay);   // 버튼 클릭 시 비디오 재생 & 일시정지
skipButtons.forEach(button => button.addEventListener('click', skip));  // 스킵 버튼
ranges.forEach(range => range.addEventListener('change', rangeUpdate)); // 음량 & 재생속도 조절
ranges.forEach(range => range.addEventListener('mousemove', rangeUpdate));  // 음량 & 재생속도 조절

let mousedown = false;  // 플래그
progress.addEventListener('click', scrub);  // 재생바 클릭 시 재생시간 변경
progress.addEventListener('mousemove', (e) => mousedown && scrub(e)); // 재생바 클릭 + 이동 시 재생시간 변경
progress.addEventListener('mousedown', () => mousedown = true); // 마우스 클릭 시 플래그 true
progress.addEventListener('mouseup', () => mousedown = false);  // 마우스 클릭하지 않았을 때 플래그 false