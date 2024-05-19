const handleRenderProducts = () => {
  const productsContainer = document.querySelector('.products-container');
  let productIndex = -1;
  const productsQuantity = products.length;
  const rowsQuantity = Math.ceil(productsQuantity / 4);
  console.log(rowsQuantity);
  for (let i = 0; i < rowsQuantity; i++) {
    const rowElement = document.createElement('div');
    rowElement.classList.add('row');
    for (let j = 0; j < 4; j++) {
      productIndex++;
      if (productIndex == productsQuantity) {
        break;
      }
      const productData = products[productIndex];
      let statusColor = 'dark';
      if (productData.status.includes('new')) {
        statusColor = 'primary';
      } else if (productData.status.includes('sale 10%')) {
        statusColor = 'danger';
      }
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
                            <h5><span class="badge bg-${statusColor} ms-2">${productData.status}</span></h5>
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
        </div>
        `;

      rowElement.appendChild(productEl);
    }
    productsContainer.appendChild(rowElement);
  }
};

handleRenderProducts();
