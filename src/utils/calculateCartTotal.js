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
    cart.forEach(product => { cartTotal += product.precio * cantidad })
    total.innerHTML = `Total: <strong>$${cartTotal}</strong>`
})

window.document.addEventListener("DOMContentLoaded", () => {
    const cart = getCart()
    if (cart.length === 0) return
    cart.forEach(product => {
        const plusButton = document.getElementById(`btn-${product.id}-plus`)
        const minusButton = document.getElementById(`btn-${product.id}-minus`)
        const inputCantidad = document.getElementById(`input-${product.id}`)

        if (!plusButton || !minusButton || !inputCantidad) return
        console.log("los botones existen")
        plusButton.onclick = () => {
            console.log("sumando")
            inputCantidad.value++
            return
        }
        minusButton.onclick = () => {
            console.log('restando')
            if (inputCantidad.value <= 0) {
                inputCantidad.value = 0
                return
            }
            inputCantidad.value--
            return
        }
    })
})