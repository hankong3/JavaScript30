const keys = [];
const secretCode = 'apple';

window.addEventListener('keyup', (e) => {
    console.log(e.key);
    keys.push(e.key);
    keys.splice(0, keys.length - secretCode.length);
    if (keys.join('').includes(secretCode)) {
        console.log('You did it👍');
        cornify_add();
    }
    console.log(keys);
});