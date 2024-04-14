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
// Array - Mảng
// Object - Đối tượng

// Các thuộc tính và phương thức làm việc với mảng
// 1. length -> lấy độ dài mảng
// 2. concat() -> nối các mảng với nhau, không làm thay đổi mảng cũ
// 3. push(...tham số) -> thêm phần tử vào cuối mảng, có làm thay đổi mảng
// 4. pop() -> loại bỏ phần tử cuối cùng của mảng, có làm thay đổi mảng
// 5. shift() -> loại bỏ phần tử đầu tiên của mảng, có làm thay đổi mảng
// 6. unshift(...tham số) -> thêm phần tử vào đầu mảng, có làm thay đổi mảng
// 7. join(...tham số) -> tạo chuỗi từ mảng ban đầu, ngăn cách các phần tử bằng các ký tự mình tự định nghĩa

// Cách lặp qua mảng

// const myArr = [1, 2, 3, 4];

// // Cách 1: For loop
// const myArr2 = [];
// for (let i = 0; i < myArr.length; i++) {
//   let el = myArr[i] * myArr[i];
//   myArr2.push(el);
// }
// // console.log(myArr2);

// // Cách 2: forEach()
// const myArr3 = [];
// myArr.forEach(function (element) {
//   myArr3.push(element * element);
// });
// // console.log(myArr3);

// // Cách 3: map()
// const myArr4 = myArr.map(function (e) {
//   return e * e;
// });
// console.log(myArr4);

// let leName = 'Hien Le';
// let leAge = 16;
// let leHobby = 'Nghe nhạc';
// const leInfo = () => {
//   console.log(`Xin chào, mình là ${leName}. Năm nay mình ${leAge}. Sở thích của mình là ${leHobby}`);
// };
// leInfo();

const hienLe = {
  name: 'Hiền Lê',
  age: 16,
  hobby: 'nghe nhạc',
  isKind: true,
  introduce: function () {
    console.log(`Xin chào, mình là ${this.name}`);
  },
};

// hienLe.name = 'Đinh Phạm Hiền Lê';
// hienLe.class = 'JSA02';
// console.log(hienLe);

// const products = [
//   {
//     imgUrl: '.........',
//     isOffical: true,
//     productName: 'Laptop 2 in 1',
//     productPrice: 1000,
//     productStars: 4.5,
//   },
//   {
//     imgUrl: '.........',
//     isOffical: false,
//     productName: 'Casio 2 in 1',
//     productPrice: 200,
//     productStars: 4,
//   },
//   {
//     imgUrl: '.........',
//     isOffical: true,
//     productName: 'Television',
//     productPrice: 2000,
//     productStars: 5,
//   },
// ];

// products.forEach(function (e) {
//   console.log(e.productName);
// });
