const renderCart = () => {
    const productContainer = document.getElementById("cart-product-list")
    if (!productContainer) return
    productContainer.innerHTML = ""
    const cart = getCart()

    if (cart.length === 0) {
        productContainer.innerHTML = "<p class='fs-5 align-text-center'>Aun no haz agregado productos al carrito</p>"
        return
    }
    cart.forEach((currentProduct) => {
        const productTemplate = ` <div class="row shadow rounded-3 p-2">
                    <div class="col-2 d-flex align-items-center">
                        <img src="https://placehold.co/1920x1080/webp" alt="" class="w-100 h-auto rounded" />
                    </div>
                    <div class="col-6">
                        <p class="fs-3">${currentProduct.nombre} </p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam modi quis harum cupiditate sed
                            odio tenetur saepe accusantium architecto dolore pariatur.</p>
                    </div>
                    <div class="col-4 d-flex align-items-center flex-column justify-content-center">
                        <p class="text-center fs-4">$${currentProduct.precio}</p>
                        <div class="row">
                            <div class="col-4 d-flex justify-content-end px-0">
                                <button id=btn-${currentProduct.id}-minus class="rounded-circle border-0 p-1 btn btn-light"><i
                                        class="bi bi-dash fs-5"></i></button>
                            </div>
                            <div class="col-4 d-flex flex-grow-1 px-0">
                                <input type="text" min="0" placeholder="1" class="w-100 border-0 text-center" id=input-${currentProduct.id} value=${currentProduct.cantidad ? currentProduct.cantidad : 1}>
                            </div>
                            <div class="col-4 d-flex justify-content-start px-0">
                                <button id=btn-${currentProduct.id}-plus class="rounded-circle border-0 p-1 btn btn-light"><i
                                        class="bi bi-plus-lg fs-5"></i></button>
                            </div>
                        </div>

                    </div>
                </div>`
        productContainer.innerHTML += productTemplate
    })
    cart.forEach(product => {
        const plusButton = document.getElementById(`btn-${product.id}-plus`)
        const minusButton = document.getElementById(`btn-${product.id}-minus`)
        const inputCantidad = document.getElementById(`input-${product.id}`)
        console.log("update cart func")
        console.log({ plusButton, minusButton, inputCantidad })
        if (!plusButton || !minusButton || !inputCantidad) return
        console.log("existen los botones de sumar y restar")
        plusButton.onclick = () => {
            console.log("sumando")
            inputCantidad.value++
            const productQuantity = inputCantidad.value

            const newCart = cart.filter(currentProduct => currentProduct.id !== product.id)
            newCart.push({ ...product, cantidad: Number(productQuantity), precio: (product.precio * product.cantidad) })

            updateCart(newCart)
            renderCart()
            return
        }
        minusButton.onclick = () => {
            if (inputCantidad.value <= 0) {
                inputCantidad.value = 0

                return
            }
            console.log("restando")
            inputCantidad.value--
            const productQuantity = inputCantidad.value
            const newCart = cart.filter(currentProduct => currentProduct.id !== product.id)
            newCart.push({ ...product, cantidad: Number(productQuantity), precio: (product.precio * product.cantidad) })
            updateCart(newCart)
            renderCart()
            return
        }
    })
}