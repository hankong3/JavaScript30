// 👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀
const triggers = document.querySelectorAll('a');
const highlight = document.createElement('span');
highlight.classList.add('highlight');
document.body.appendChild(highlight);

function highlightLink() {
    const linkCoords = this.getBoundingClientRect();
    console.log(linkCoords);
}

triggers.forEach(trigger => trigger.addEventListener('mouseenter', highlightLink));