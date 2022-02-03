/**
 * If else switch
 */

let nilai = 80;
// if (nilai > 80) {
//     // eksesusi kode kita jika kondisi itu terpenuhi
//     console.log('Selamat, kamu lulus');
// } else {
//     // eksesusi kode kita jika kondisi itu tidak terpenuhi
//     console.log('Maaf, kamu tidak lulus');
// }

let nama = 'Rifqi';
// if (nama) { // jika nama tidak kosong
//     console.log('ga kosong');
//     if (nilai >= 80) {
//         console.log('Selamat, kamu lulus');
//     } else {
//         console.log('Maaf, kamu tidak lulus');
//     }
// } else {
//     console.log('kosong');
// }

// Switch
let grade = 'A';
switch (grade) {
    case 'A':
        console.log('Excellent');
        break;
    case 'B':
    case 'C':
        console.log('Good');
        break;
    case 'D':
        console.log('Not Bad');
        break;
    case 'E':
        console.log('Bad');
        break;
    default:
        console.log('Maaf, anda salah memasukkan nilai');
}