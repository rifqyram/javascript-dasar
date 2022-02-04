/**
 * Array menggunakan keyword []
 * Array adalah tipe data di javascript yang bisa menampung banyak data, array dijavascript itu bersifat dinamis
 * Array itu berurutan posisinya dimulai dengan index 0;
 * element adalah data nya dan berurutan
 */

let items = [1, 2, 3];
items = ['1', 'Rifqi', 'Ramadhan'];
items = [true, false, true];
items = ['1', 2, 'Rifqi', true, false, 'Ramadhan', 2];

// console.log(items[0]);
// console.log(items[1]);
// console.log(items[2]);
// console.log(items[3]);
// console.log(items[4]);
// console.log(items);

for (let i = 0; i < items.length; i++) {
    console.log(items[i]);
}