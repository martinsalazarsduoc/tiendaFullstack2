const product = `<div class="col-3 order-2">
        <div class="bg-light p-3 rounded">
          <img
            src="https://placehold.co/1920x1080/webp"
            alt=""
            class="w-100 h-auto rounded"
          />
          <div>
            <h6 class="text-center">Product title</h6>
            <p class="text-center">$1000</p>
            <div class="d-flex justify-content-center">
              <button class="btn btn-primary">Añadir</button>
            </div>
          </div>
        </div>
      </div>`;
window.document.addEventListener("DOMContentLoaded", (event) => {
  const productContainer = document.getElementById("productList");
  console.log(productContainer);
  if (productContainer == undefined) return;
});
