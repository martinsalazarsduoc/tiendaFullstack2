window.document.addEventListener("DOMContentLoaded", () => {
  const productListContainer = document.getElementById("productContainer")
  if (!productListContainer) return

  const productTotal = 8
  for (let i = 0; i < productTotal; i++) {
    const product = `<div class="col-3 my-2 ">
        <div class="bg-light p-3 rounded shadow">
          <div>
            <img
              src="https://placehold.co/1920x1080/webp"
              alt=""
              class="w-100 h-auto rounded"
            />
          </div>
          <h6 class="text-center">Producto ${i + 1}</h6>
          <p class="text-center">$1000</p>
          <div class="d-flex justify-content-center">
            <a class="btn btn-primary" href="/products/single?id=${i + 1}">Ver</a>
          </div>
        </div>
      </div>`
    productListContainer.innerHTML += product
  }


})