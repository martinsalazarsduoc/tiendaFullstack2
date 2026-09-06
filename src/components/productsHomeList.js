window.document.addEventListener("DOMContentLoaded", () => {
  const productListContainer = document.getElementById("productContainer")
  if (!productListContainer) return

  const productTotal = 8
  const productList = getProductsLoaded()
  productList.slice(0, productTotal).forEach(product => {
    const productTemplate = `<div class="col-3 my-2 ">
        <div class="bg-light p-3 rounded shadow">
          <div>
            <img
              src="https://placehold.co/1920x1080/webp"
              alt=""
              class="w-100 h-auto rounded"
            />
          </div>
          <h6 class="text-center">${product.nombre}</h6>
          <p class="text-center">$${product.precio}</p>
          <div class="d-flex justify-content-center">
            <a class="btn btn-primary" href="/products/single?id=${product.id}">Ver</a>
          </div>
        </div>
      </div>`
    productListContainer.innerHTML += productTemplate
  })



})