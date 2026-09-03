const saveProduct = (nombre, precio, id) => {
  console.log("ksdflks");
  const carrito = JSON.parse(window.localStorage.getItem("carrito"))
    ? JSON.parse(window.localStorage.getItem("carrito"))
    : [];
  let newProduct = { id, nombre, precio };
  console.log(JSON.parse(carrito));
  carrito.push(newProduct);
  window.localStorage.setItem("carrito", carrito);
};

window.document.addEventListener("DOMContentLoaded", () => {
  const productContainer = document.getElementById("productList");
  console.log(productContainer);
  if (!productContainer) return;

  for (let contador = 1; contador < 13; contador++) {
    const product = `<div class="col-3 order-${contador}">
        <div class="bg-light p-3 rounded">
          <img
            src="https://placehold.co/1920x1080/webp"
            alt=""
            class="w-100 h-auto rounded"
          />
          <div>
            <h6 class="text-center"> Producto ${contador} </h6>
            <p class="text-center">$1000</p>
            <div class="d-flex justify-content-center">
              <button id= btn-${contador} class="btn btn-primary">Añadir</button>
            </div>
          </div>
        </div>
      </div>`;

    productContainer.innerHTML += product;
    const currentButton = document.getElementById(`btn-${contador}`);
    if (!currentButton) return;
    console.log(currentButton);

    currentButton.onclick = () => {
      console.log("onclick");
      saveProduct("nombre", 7000, contador);
    };
  }
});
