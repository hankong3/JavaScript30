const inputs = document.querySelectorAll('.controls input');

function changeImg() {
    const pixel = this.dataset.sizing || '';

    // set​Property() 메서드 인터페이스는 CSS 스타일 선언 객체에서 속성의 새 값을 설정한다.
    // https://developer.mozilla.org/en-US/docs/Web/API/CSSStyleDeclaration/setProperty
    document.documentElement.style.setProperty(`--${this.name}`, this.value + pixel);
}

inputs.forEach(input => input.addEventListener('change', changeImg));
inputs.forEach(input => input.addEventListener('mousemove', changeImg));