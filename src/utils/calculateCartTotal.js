window.document.addEventListener('DOMContentLoaded', () => {
    const total = document.getElementById("cart-total")
    if (!total) return

    const cart = window.localStorage.getItem('carrito') ? JSON.parse(window.localStorage.getItem('carrito'))
        : []

    if (cart.length === 0) {
        const message = 'Total: <strong>$0</strong>'
        total.innerHTML += message
        return;
    }

    let cartTotal = 0
    cart.forEach(product => { cartTotal += product.precio })
    console.log({ cartTotal })
    total.innerHTML = `Total: <strong>$${cartTotal}</strong>`
})