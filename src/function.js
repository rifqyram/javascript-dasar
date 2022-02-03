/**
 * Function = adalah blok kode program yang akan berjalan saat function itu dipanggil
 * function namaFunction() {
 *  kode yg akan di eksekusi
 * }
 */

function sayHello(firstname, lastname) {
    // console.log('Hello ' + firstname + ' ' + lastname);

    // String Template ``
    if (typeof firstname === 'string' && typeof lastname === 'string') {
        console.log(`Hello ${firstname} ${lastname}`);
    } else if (typeof firstname === 'string' && lastname === undefined) {
        console.log(`Hello ${firstname}`);
    } else {
        console.log('Error: Firstname and Lastname must be string');
    }
}

// sayHello('Rifqi');

/**
 * Arrow Function
 */
// const anonymousFunc = function () { }

const sayHello2 = (firstname, lastname) => {
    console.log(`Hello ${firstname} ${lastname}`);
}

let helloFunc = sayHello2('Rifqi', 'Ramadhan'); // undefined

console.log(helloFunc);

function sum(number1, number2) {
    let result = number1 + number2;
    return result;
}

// console.log(sum(10, 20));
let resultSum = sum(10, 20);
console.log(resultSum);

const multiply = (number1, number2) => {
    return number1 * number2
};

let resultMultiply = multiply(10, 10);
console.log(resultMultiply);

console.log('==============================');
let x = 0;

