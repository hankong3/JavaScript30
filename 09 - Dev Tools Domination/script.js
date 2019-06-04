const dogs = [
    { name: 'Snickers', age: 2 },
    { name: 'hugo', age: 8 }
];

function makeGreen() {
    const p = document.querySelector('p');
    p.style.color = '#BADA55';
    p.style.fontSize = '50px';
}

// Regular
console.log('Hello!');

// Interpolated
console.log('Hello, My name is %s.', 'Lee');

// Styled
console.log('%cBlue', 'color:blue; font-size:30px;');

// warning!
console.warn('Warning!!!');

// Error :|
console.error('Error⛔');

// Info
console.info('Kiwi or kiwis are flightless birds native to New Zealand, in the genus Apteryx and family Apterygidae.');

// Testing
// const p = document.querySelector('p');

// clearing

// Viewing DOM Elements

// Grouping together

// counting

// timing
