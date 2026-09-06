const generateProducts = () => {
    const productList = []
    for (let i = 0; i < 20; i++) {
        const price = Math.floor(Math.random() * (50000 + 1))
        productList.push({ id: i + 1, nombre: `Producto ${i + 1}`, precio: price })
    }

    return productList
}

const loadProducts = () => {

    localStorage.setItem("productList", JSON.stringify(generateProducts()))
}
const getProductsLoaded = () => {
    return localStorage.getItem("productList") ? JSON.parse(localStorage.getItem("productList")) : []
}
if (getProductsLoaded.length === 0) {
    loadProducts()
}