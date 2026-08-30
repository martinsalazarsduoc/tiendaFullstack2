// TODO: agregar deteccion de ruta actual y marcado en el nav
const navbar = `<div class="col-2 d-flex flex-column p-0 border-end border-secondary">
                <div class="col-12 p-2 bg-dark">
                    <img src="https://placehold.co/1920x1080/webp" class="w-100 h-auto rounded" />
                </div>
                <div class="col-12 flex-grow-1 bg-dark">
                    <nav class="nav flex-column w-100 p-4 text-white">
                        <li class="nav-item my-1 py-2">
                            <a href="#" class="nav-link text-white">Dashboard</a>
                        </li>
                        <li class="nav-item my-1 py-2">
                            <a href="#" class="nav-link text-white">Ordenes</a>
                        </li>
                        <li class="nav-item my-1 py-2">
                            <a href="#" class="nav-link text-white">Inventario</a>
                        </li>
                        <li class="nav-item my-1 py-2">
                            <a href="#" class="nav-link text-white">Reportes</a>
                        </li>
                        <li class="nav-item my-1 py-2">
                            <a href="#" class="nav-link text-white">Empleados</a>
                        </li>
                        <li class="nav-item my-1 py-2">
                            <a href="#" class="nav-link text-white">Clientes</a>
                        </li>
                    </nav>
                </div>
            </div>`

window.document.addEventListener('DOMContentLoaded', (e => {
    const nav = document.getElementById("nav")
    if (!nav) return

    nav.outerHTML = navbar
}))