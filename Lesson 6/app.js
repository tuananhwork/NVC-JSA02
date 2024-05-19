const showProduct = () => {
  const productsContainer = document.querySelector('.products-container');
  let productCount = -1;
  const productsQuantity = products.length;
  console.log(productsQuantity);

  const rowsNumber = Math.ceil(productsQuantity / 4);
  for (let i = 0; i < rowsNumber; i++) {
    const rowEl = document.createElement('div');
    rowEl.className = 'row';
    for (let j = 0; j < 4; j++) {
      productCount += 1;
      console.log(productCount);

      if (productCount > productsQuantity - 1) {
        break;
      }
      const productData = products[productCount];
      const productEl = document.createElement('div');
      productEl.className = 'col-lg-3 col-md-6 mb-4';
      productEl.innerHTML = `
        <div class="card">
            <div class="bg-image hover-zoom ripple ripple-surface ripple-surface-light"
                data-mdb-ripple-color="light">
                <img src="${productData.image}"
                    class="w-100" />
                <a href="#!">
                    <div class="mask">
                        <div class="d-flex justify-content-start align-items-end h-100">
                            <h5><span class="badge bg-dark ms-2">${productData.status}</span></h5>
                        </div>
                    </div>
                    <div class="hover-overlay">
                        <div class="mask" style="background-color: rgba(251, 251, 251, 0.15);">
                        </div>
                    </div>
                </a>
            </div>
            <div class="card-body">
                <a href="" class="text-reset">
                    <h5 class="card-title mb-2">${productData.name}</h5>
                </a>
                <a href="" class="text-reset ">
                    <p>${productData.category}</p>
                </a>
                <h6 class="mb-3 price">${productData.price}$</h6>
            </div>
            <div class="d-flex justify-content-center">
                <button class="btn btn-primary mb-3 w-75">Add</button>
            </div>
        </div>
      `;
      rowEl.appendChild(productEl);
    }
    productsContainer.appendChild(rowEl);
  }
};

showProduct();
