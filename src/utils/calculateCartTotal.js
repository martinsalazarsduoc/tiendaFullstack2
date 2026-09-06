
window.document.addEventListener('DOMContentLoaded', () => {
    const total = document.getElementById("cart-total")
    if (!total) return

    const cart = getCart()

    if (cart.length === 0) {
        const message = 'Total: <strong>$0</strong>'
        total.innerHTML += message
        return;
    }

    let cartTotal = 0
    cart.forEach(product => { cartTotal += product.precio * product.cantidad })
    total.innerHTML = `Total: <strong>$${cartTotal}</strong>`
})

window.document.addEventListener("DOMContentLoaded", () => {
    const cart = getCart()
    if (cart.length === 0) return
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
})