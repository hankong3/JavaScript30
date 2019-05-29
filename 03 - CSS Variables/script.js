const inputs = document.querySelectorAll('.controls input');

function changeImg() {
    console.log(this);
}

inputs.forEach(input => input.addEventListener('change', changeImg));
inputs.forEach(input => input.addEventListener('mousemove', changeImg));