const getCart = () => {
    let cart = window.localStorage.getItem('carrito') ? JSON.parse(window.localStorage.getItem('carrito'))
        : []

    return cart.length === 0 ? [] : cart
}