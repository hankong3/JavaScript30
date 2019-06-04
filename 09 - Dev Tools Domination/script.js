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
const p = document.querySelector('p');
console.assert(p.classList.contains('ouch'), 'That is wrong!');

// clearing
console.clear();

// Viewing DOM Elements
console.log(p);
console.dir(p);

// Grouping together
dogs.forEach(dog => {
    console.group(`${dog.name}`);
    console.log(`This is ${dog.name}`);
    console.log(`${dog.name} is ${dog.age} years old`);
    console.log(`${dog.name} is ${dog.age * 7} dog years old`);
    console.groupEnd();
});

dogs.forEach(dog => {
    console.groupCollapsed(`${dog.name}`);
    console.log(`This is ${dog.name}`);
    console.log(`${dog.name} is ${dog.age} years old`);
    console.log(`${dog.name} is ${dog.age * 7} dog years old`);
    console.groupEnd();
});

// counting

// timing
