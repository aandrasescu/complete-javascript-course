'use strict';

// Hoisting with variables
// console.log(me);
// console.log(job);
// console.log(year);

// var me = 'Alex';
// let job = 'designer';
// const year = 1988;


// hoisting with functions
// console.log(addDecl(2, 3));
// console.log(addExpr(3, 4));
// console.log(addArrow(2, 3));

// function addDecl(a, b) {
//     return a + b;
// }

// const addExpr = function (a, b) {
//     return a + b;
// };

// const addArrow = (a, b) => a + b;


// var x = 1;
// let y = 2;
// const z = 3;


// console.log(this);

// const calcAge = function(birthyear) {
//     console.log(2037 - birthyear);
//     console.log(this);
// };

// calcAge(1988);


// const calcAge = birthyear => {
//     console.log(2037 - birthyear);
//     console.log(this);
// };

// calcAge(2001);

// const alex = {
//     year: 1988,
//     calcAge: function() {
//         console.log(this);
//         console.log(2037 - this.year);
//     }
// };

// alex.calcAge();

// const maria = {
//     year: 2018
// }

// maria.calcAge = alex.calcAge;
// maria.calcAge();

// const f = alex.calcAge;
// f();


// const alex = {
//     firstName: 'Alex',
//     year: 1988,
//     calcAge: function() {
//         console.log(this);
//         console.log(2037 - this.year);

//         // Solution 1
//         // const self = this;
//         // const isMillenial = function() {
//         //     console.log(self);
//         //     console.log(self.year >= 1981 && self.year <= 1996);
//         //     // console.log(this.year >= 1981 && this.year <= 1996);
//         // }

//         // Solution 2
//         const isMillenial = () => {
//             console.log(self);
//             console.log(this.year >= 1981 && this.year <= 1996);
//         }

//         isMillenial();
//     },
//     greet: () => {
//         console.log(this);
//         console.log(`Hei, ${this.firstName}`)
//     }
// };

// alex.greet();
// alex.calcAge();


// arguments keyword
// const addExpr = function (a, b) {
//     console.log(arguments);
//     return a + b;
// }

// console.log(addExpr(2, 5, 8, 12));

// var addArrow = (a, b) => {
//     console.log(arguments);
//     return a + b;
// }

// console.log(addArrow(2, 3));


// let age = 36;
// let oldAge = age;
// age = 37;
// console.log(age);
// console.log(oldAge); 

// const me = {
//     name: 'Alex',
//     age: 36
// };

// const friend = me;
// friend.age = 27;
// console.log('Friend:', friend);
// console.log('Me', me);


// Primitive types
let lastName = 'Williams';
let oldLastName = lastName;
lastName = 'Davis';
console.log(lastName, oldLastName);

// Reference types
const jessica = {
    firstName: 'Jessica',
    lastName: 'Williams',
    age: 27
};

const marriedJessica = jessica;
marriedJessica.lastName = 'Davis';
console.log('Before marriage', jessica);
console.log('After marriage', marriedJessica);


// Copying objects
const jessica2 = {
    firstName: 'Jessica',
    lastName: 'Williams',
    age: 27,
    family: ['Alice', 'Bob']
};

const jessicaCopy = Object.assign({}, jessica2);
jessicaCopy.lastName = 'Davis';
jessicaCopy.family.push('Mary');
jessicaCopy.family.push('Steve');
console.log('Before marriage', jessica2);
console.log('After marriage', jessicaCopy);
