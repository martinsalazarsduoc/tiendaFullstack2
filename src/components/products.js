const saveProduct = (nombre, precio, id, cantidad) => {
  const carrito = getCart()
  let newProduct = { id, nombre, precio, cantidad: Number(cantidad) || 1 };
  carrito.push(newProduct);
  window.localStorage.setItem("carrito", JSON.stringify(carrito));
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
          <img
            src="https://placehold.co/1920x1080/webp"
            alt=""
            class="w-100 h-auto rounded"
          />
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

    currentButton.onclick = () =>
      saveProduct(
        "producto " + contador,
        Math.floor(Math.random() * (50000 + 1)),
        contador,
        1,
      );
  }
});
