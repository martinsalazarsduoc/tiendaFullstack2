const updateCart = (newCart) => {
    window.localStorage.setItem("carrito", JSON.stringify(newCart))
}