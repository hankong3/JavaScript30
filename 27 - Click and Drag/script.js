const slider = document.querySelector('.items');
let isClick = false;

slider.addEventListener('mousedown', () => {
    isClick = true;
    slider.classList.add('active');
});
slider.addEventListener('mouseup', () => {
    isClick = false;
    slider.classList.remove('active');
});
slider.addEventListener('mouseleave', () => {
    isClick = false;
    slider.classList.remove('active');
});