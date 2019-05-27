const keys = document.querySelectorAll('.key');

function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`div[data-key="${e.keyCode}"]`);

    if (!audio) return;
    audio.currentTime = 0; // 현재 위치를 0초로 이동시켜서 연속 입력 가능
    audio.play(); // audio 재생
    key.classList.add('playing'); // 입력한 key에 'playing' class 추가
}

function removePlaying(e) {
    if (e.propertyName !== 'transform') return; // 누르지 않은 key는 다음 코드를 실행하지 않음
    e.target.classList.remove('playing'); // 입력한 key의 클래스 중 'playing' class 제거
}

keys.forEach(key => key.addEventListener('transitionend', removePlaying));
window.addEventListener('keydown', playSound);