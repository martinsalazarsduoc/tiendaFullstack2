const updateCart = (newCart) => {
    newCart.sort((product, product2) => product.id - product2.id)
    window.localStorage.setItem("carrito", JSON.stringify(newCart))
}