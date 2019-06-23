const slider = document.querySelector('.items');
let isClick = false;

function stopSlider() {
    isClick = false;
    slider.classList.remove('active');
}

slider.addEventListener('mousedown', () => {
    isClick = true;
    slider.classList.add('active');
});
slider.addEventListener('mouseup', stopSlider);
slider.addEventListener('mouseleave', stopSlider);