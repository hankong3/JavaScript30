const speed = document.querySelector('.speed');
const speedBar = document.querySelector('.speed-bar');
const video = document.querySelector('.flex');

function moveBar(e) {
    const y = e.pageY - this.offsetTop;
    const percent = y / this.offsetHeight;
    console.log(y, percent);
}

speed.addEventListener('mousemove', moveBar);