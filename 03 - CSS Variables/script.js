const inputs = document.querySelectorAll('.controls input');

function changeImg() {
    console.log(this);
    const pixel = this.dataset.sizing || '';
}

inputs.forEach(input => input.addEventListener('change', changeImg));
inputs.forEach(input => input.addEventListener('mousemove', changeImg));