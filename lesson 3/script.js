// let myName = 'Tuan Anh';
// const myArr = ['a', 'b', 'c'];
// const myObj = {
//   name: 'Tuan Anh',
//   age: 18,
//   job: 'Teacher',
// };

// // For
// // for (let i = 0; i < myName.length; i++) {
// //   console.log(i);
// //   console.log(myName[i]);
// // }

// // For in
// // for (let index in myObj) {
// //   console.log(index);
// // }

// // for of
// for (let value of myObj) {
//   console.log(value);
// }

// Lấy data render ra giao diện
// products -> trả ra giao diện

// for of
const container = document.querySelector('.wrapper');
const searchBtn = document.getElementById('search-submit');

const handleSearch = () => {
  const inputValue = document.getElementById('search-input').value.trim();

  if (inputValue == '') {
    alert('You must enter ...');
    return;
  }

  const resultProducts = products.filter((product) => {
    return product.name.toLowerCase().includes(inputValue.toLowerCase());
  });

  container.innerHTML = '';
  resultProducts.forEach((product) => {
    let productName = product.name;
    let productPrice = product.price;
    let productDesc = product.desc;

    const productEl = document.createElement('div');
    productEl.classList.add('product');

    productEl.innerHTML = `
      <div class="product">
        <h1 class="product-name">${productName}</h1>
        <h2 class="product-price">${productPrice} <span>$</span></h2>
        <p class="product-desc">${productDesc}</p>
      </div>
    `;

    container.appendChild(productEl);
  });
};

// for (const product of products) {
//   let productName = product.name;
//   let productPrice = product.price;
//   let productDesc = product.desc;

//   const productEl = document.createElement('div');
//   productEl.classList.add('product');

//   productEl.innerHTML = `
//     <div class="product">
//       <h1 class="product-name">${productName}</h1>
//       <h2 class="product-price">${productPrice} <span>$</span></h2>
//       <p class="product-desc">${productDesc}</p>
//     </div>
//   `;

//   container.appendChild(productEl);
// }

products.forEach((product) => {
  let productName = product.name;
  let productPrice = product.price;
  let productDesc = product.desc;

  const productEl = document.createElement('div');
  productEl.classList.add('product');

  productEl.innerHTML = `
    <div class="product">
      <h1 class="product-name">${productName}</h1>
      <h2 class="product-price">${productPrice} <span>$</span></h2>
      <p class="product-desc">${productDesc}</p>
    </div>
  `;

  container.appendChild(productEl);
});

searchBtn.addEventListener('click', handleSearch);
