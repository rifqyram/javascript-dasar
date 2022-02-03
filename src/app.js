/**
 * - var
 * Bisa di reassign
 * Bisa di redeclare
 * Bisa di hoisting
 * - let
 * Hanya Bisa di reassign
 * Tidak bisa di redeclare
 * Tidak bisa di hoisting
 * - const
 * Tidak bisa di reassign
 * Tidak bisa di redeclare
 * Tidak bisa di hoisting
 */

// Redeclare
// var a = 1;
// var a = 2;

// Hoisting
message = 'Hello World';
// var message;

// console.log(message);


// message2 = 'Hello World';
// let message2;
// console.log(message2);

// Reassign 
const message3 = 'Hello World';
// message3 = 'Hello Dunia';
// console.log(message3);

// console.log('Hello World');

// Contoh Block Scoped
// var a = 100;
// if (a === 100) {
//     var a = 200;
//     console.log(a);
// }

// function test() {
//     var a = 200;
//     console.log(a);
// }
// test()

// console.log(a);

// let a = 100;
// if (a === 100) {
//     let a = 200;
//     console.log(a);
// }

// console.log(a);
