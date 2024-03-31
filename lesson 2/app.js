// For loop
// expression: biểu thức
// for (expression1; expression2; expression3) {
//     // Thực hiện loop here
// }

// expression1: Giá trị khởi tạo
// expression2: Điều kiện lặp
// expression3: Kết thúc vòng lặp

// for (let i = 1; i <= 10; i++) {
//   console.log('i', i);
// }

// While
// while (condition) {
//     // Code here
// }

// let i = 100;
// while (i <= 10) {
//   console.log('i:', i);
//   i++;
// }

// Do - While
// let j = 100;
// do {
//   console.log('j:', j);
//   j++;
// } while (j <= 10);

// hiển thị ô để người dùng nhập tuổi

// let age;
// do {
//   age = prompt('Vui lòng nhập tuổi của bạn');
// } while (age < 6 || age > 90);

// bài tập:
// 1. Yêu cầu người dùng nhập vào một số dương n. Sau đó tính:
// a) Tính tổng từ 1 -> n
// b) In ra màn hình các số chẵn từ 1 -> n
// c) Tính 1/1 + 1/2 + 1/3 + ... + 1/n

let n;
do {
  n = prompt('Nhap so duong n');
} while (n <= 0);

// let sum = 0;
// for (let i = 0; i <= n; i++) {
//   sum = sum + i;
// }
// console.log(sum);

// for (let i = 0; i <= n; i++) {
//   if (i % 2 == 0) {
//     console.log(i);
//   }
// }

// let sum = 0;
// for (let i = 1; i <= n; i++) {
//   sum = sum + 1 / i;
// }
// console.log(sum);
