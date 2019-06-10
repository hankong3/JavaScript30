const hourHand = document.querySelector('.hour-hand');
const minHand = document.querySelector('.min-hand');
const secondHand = document.querySelector('.second-hand');

function getDate() {
    const now = new Date();
    const deg = 90;

    const seconds = now.getSeconds();
    const secondsDeg = (seconds / 60) * 360 + deg;
    secondHand.style.transform = `rotate(${secondsDeg}deg)`;

    const mins = now.getMinutes();
    const minsDeg = (mins / 60) * 360 + ((seconds / 60) * 6) + deg;
    minHand.style.transform = `rotate(${minsDeg}deg)`;

    const hour = now.getHours();
    const hourDeg = (hour / 12) * 360 + ((mins / 60) * 30) + deg;
    hourHand.style.transform = `rotate(${hourDeg}deg)`;
}

setInterval(getDate, 1000);

getDate();