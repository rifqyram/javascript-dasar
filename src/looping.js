/**
 * For loop
 * while loop
 * do while loop
 */

let i = 0;
// while (i < 5) {
//     console.log(i);
//     i++;
// }

// do {
//     i++;
//     console.log(i);
// } while (i == 0)

// For loop
// for (initialization; condition; increment) {
//     // code
// }
// for (let i = 0; i < 10; i++) {
//     if (i % 2 == 0) {
//         console.log('Angka Genap: ' + i);
//     } else {
//         console.log('Angka Ganjil: ' + i);
//     }
// }

for (let i = 0; i < 5; i++) {
    let x = '';
    for (let j = 0; j < i; j++) {
        x = x + '*';
    }
    console.log(x);
}