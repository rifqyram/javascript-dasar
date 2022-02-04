/**
 * callback function: adalah sebuah function yang dikirimkan ke function lain, sebagai parameter, untuk dipanggil didalam function lain tersebut
 * gunanya untuk menghandle asynchronous code
 * synchronous code: adalah code yang berjalan secara baris per baris 
 * asynchronous : mengeksekusi program jalan sesuai dengan function/method yang dipanggil, tanpa menunggu output itu selesai
 */

const greet = (nama, callback) => {
    console.log(`Hello ${nama}`);
    callback();
}

// Callback functionnya
const callMe = () => {
    console.log('Im callback function');
}

// mengirim parameter ke function greet sebuah function lain yaitu callMe
// greet('Rifqi', callMe);

const orderCoffee = (callback) => {
    console.log('kopi sedang dibuat...');
    let kopi = null;
    setTimeout(() => {
        kopi = 'kopi latte siap';
        callback(kopi);
    }, 3000);
}

const getCoffee = (kopi) => {
    console.log(kopi);
}

orderCoffee(getCoffee);
