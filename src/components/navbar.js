// TODO: agregar deteccion de ruta actual y marcado en el nav



window.document.addEventListener("DOMContentLoaded", (e) => {
    const nav = document.getElementById("nav");
    if (!nav) return;
    const currentPath = location.pathname
    const navbar = `
    <script src="../utils/getCart.js"></script>
<nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">Navbar</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
            aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                    <a class="nav-link ${currentPath === "/" ? "active" : ""}" aria-current="page" href="/">Inicio</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link ${currentPath === "/src/pages/products.html" ? "active" : ""}" href="/src/pages/products.html">Productos</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link ${currentPath === "/src/pages/news.html" ? "active" : ""}" href="/src/pages/news.html">Noticias</a>
                </li>
            </ul>
            <div class="d-flex align-items-center" role="search">
                
                <a href="/src/pages/cart.html" class="btn" type="submit"> <i class="bi bi-cart2"></i>carrito</a>
            </div> 
        </div>
    </div>
    </nav>`;

    nav.outerHTML = navbar;
});
