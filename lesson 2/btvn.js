// Bài tập về nhà Tuần 1:
// (Sử dụng vòng lặp và câu lệnh điều kiện để giải các bài toán sau đây)

// Ex1. Nhập số dương n. Tính
// 1. Tổng các số chẵn từ 0 tới n
// 2. Tổng các số lẻ từ 0 tới n
// 3. Tổng các ước từ 0 tới n của n
// 4. 1/1 + 1/(1+2) + 1/(1+2+3) + ... + 1/(1+2+...+n)

// Ex2. Những trường hợp nào dưới đây tạo ra vòng lặp vô tận?
// 1.
// for ( ; ; ) { }
// 2.
// let i = 1
// while (i < 5) { }
// 3.
// while (true) { }
// 4.
// while (1) { }
// 5.
// let i = 5
// do { i++ } while (1)

// EX1. c

let p = 0;

for (let i = 1; i <= n; i++) {
  let s3 = 0;
  for (let j = 0; j <= i; j++) {
    s3 += j;
  }
  p = p + 1 / s3;
}

// lần 1: i = 1, s3 = 0 + 1 = 1, p = 0 + 1/1
// Lần 2: i = 2, s3 = 1 + 2 = 3, p = 0 + 1/1 + 1/(1+2)

console.log(p);
