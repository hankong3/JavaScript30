const canvas = document.querySelector('#draw');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
ctx.strokeStyle = '#BADA55';
ctx.lineCap = 'round';
ctx.lineJoin = 'round';
ctx.lineWidth = 100;

let isDrawing = false;
let lastX = 0;
let lastY = 0;
let color = 0;
let line = true;

function draw(e) {
    if (!isDrawing) return;

    // console.log(e);
    ctx.strokeStyle = `hsl(${color++}, 100%, 50%)`;
    ctx.beginPath();
    ctx.moveTo(lastX, lastY);   // 선이 시작될 좌표를 설정
    ctx.lineTo(e.offsetX, e.offsetY);   // 선이 끝나는 좌표를 설정
    ctx.stroke();   // 선 그리기 시작
    [lastX, lastY] = [e.offsetX, e.offsetY];    // 선이 시작될 좌표 업데이트

    if (color >= 360) {
        color = 0;
    }

    if (ctx.lineWidth >= 100 || ctx.lineWidth <= 1) {
        line = !line;
    }

    if (line) {
        ctx.lineWidth++;
    } else {
        ctx.lineWidth--;
    }
}

if (canvas) {
    canvas.addEventListener('mousedown', (e) => {
        isDrawing = true;
        [lastX, lastY] = [e.offsetX, e.offsetY];    // 선이 시작될 좌표 초기화
    });
    canvas.addEventListener('mousemove', draw);
    canvas.addEventListener('mouseup', () => isDrawing = false);
    canvas.addEventListener('mouseout', () => isDrawing = false);
}