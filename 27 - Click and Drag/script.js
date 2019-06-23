const slider = document.querySelector('.items');
let isClick = false;
let startX;
let scrollLeft;

function stopSlider() {
    isClick = false;
    slider.classList.remove('active');
}

slider.addEventListener('mousedown', (e) => {
    isClick = true;
    slider.classList.add('active');
    startX = e.pageX;
    scrollLeft = slider.scrollLeft;
});
slider.addEventListener('mouseup', stopSlider);
slider.addEventListener('mouseleave', stopSlider);