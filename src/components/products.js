const saveProduct = (id) => {
  const productList = getProductsLoaded()
  if (productList.length === 0) return
  const product = productList.find(currentProduct => currentProduct.id === id)
  if (!product) return
  const carrito = getCart()
  carrito.push({ ...product, cantidad: 1 });
  window.localStorage.setItem("carrito", JSON.stringify(carrito));

  const alert = `<div class="position-absolute fixed-top">
    <div class="alert alert-success" role="alert">
  Producto agregado al carrito!
</div>
  </div>`
  let alertNode = document.createElement("div")
  alertNode.id = "success-alert"
  alertNode.innerHTML = alert
  const alertContainer = document.getElementById("alert");
  alertContainer.appendChild(alertNode)
  setTimeout(() => {
    alertContainer.removeChild(document.getElementById("success-alert"))
  }, 3000)
};

window.document.addEventListener("DOMContentLoaded", () => {
  const productContainer = document.getElementById("productList");

  if (!productContainer) return;
  const productList = getProductsLoaded()
  if (productList.length === 0) {
    alert("Aun no hay productos cargados")
    return
  }
  productList.forEach(product => {
    const productTemplate = `<div class="col-3 ">
        <div class="bg-light p-3 rounded">
        <a href="../pages/product_detail.html?id=${product.id}">
          <img
            src="https://placehold.co/1920x1080/webp"
            alt=""
            class="w-100 h-auto rounded"
          /></a>
          <div>
            <h6 class="text-center">${product.nombre} </h6>
            <p class="text-center">$${product.precio}</p>
            <div class="d-flex justify-content-center">
              <button id= btn-${product.id} class="btn btn-primary">Añadir</button>
            </div>
          </div>
        </div>
      </div>`;

    productContainer.innerHTML += productTemplate;
  })
  for (let contador = 1; contador < 13; contador++) {

  }
});

window.document.addEventListener("DOMContentLoaded", () => {
  for (let contador = 1; contador < 13; contador++) {
    const currentButton = document.getElementById(`btn-${contador}`);
    if (!currentButton) return;

    currentButton.onclick = () => saveProduct(contador);
  }
});
