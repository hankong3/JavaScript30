// start with strings, numbers and booleans
// let name = 'Mario';
// console.log(name);
// name = 'Yoshi'
// console.log(name);

// let num = 100;
// let num2 = 200;
// console.log(num, num2);
// num2 = 300;
// console.log(num, num2);

// let bool = false;
// console.log(bool);
// bool = true;
// console.log(bool);

// Let's say we have an array
const players = ['Wes', 'Sarah', 'Ryan', 'Poppy'];

// and we want to make a copy of it.
// const members = players;
// console.log(players, members);

// You might think we can just do something like this (ex: const team = players; team[3] = 'Yoshi';):
// members[3] = 'Yoshi';
// console.log(players, members);

// however what happens when we update that array?

// now here is the problem!

// oh no - we have edited the original array too!

// Why? It's because that is an array reference, not an array copy. They both point to the same array!

// So, how do we fix this? We take a copy instead!
// const members2 = players.slice();
// members2[2] = 'Mario';
// console.log(players, members2);

// one way

// or create a new array and concat the old one in
// const members3 = [].concat(players);
// members3[3] = 'Yoshi';
// console.log(players, members3);

// or use the new ES6 Spread
const members4 = [...players];
members4[1] = 'Luigi';
console.log(players, members4);

// now when we update it, the original one isn't changed

// The same thing goes for objects, let's say we have a person object

// with Objects
const person = {
    name: 'Wes Bos',
    age: 80
};

// and think we make a copy:

// how do we take a copy instead?

// We will hopefully soon see the object ...spread

// Things to note - this is only 1 level deep - both for Arrays and Objects. lodash has a cloneDeep method, but you should think twice before using it.