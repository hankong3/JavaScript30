const keys = [];

window.addEventListener('keyup', (e) => {
    console.log(e.key);
    keys.push(e.key);
    console.log(keys);
});