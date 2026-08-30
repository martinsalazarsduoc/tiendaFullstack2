const currentPath = window.location.pathname
const routeList = [
    { label: "Dashboard", path: "/src/pages/admin/dashboard.html" },
    { label: "Ordenes", path: "/src/pages/admin/orders.html" },
    { label: "Inventario", path: "/src/pages/admin/inventary.html" },
    { label: "Reportes", path: "/src/pages/admin/reports.html" },
    { label: "Empleados", path: "/src/pages/admin/employees.html" },
    { label: "Clientes", path: "/src/pages/admin/customers.html" }
]

const getIsActive = (href) => {
    return new URL(href, window.location.origin).pathname === currentPath
}

const renderLinks = () => {
    let routes = ""
    routeList.forEach(route => {
        routes += `<li class="nav-item my-1 py-2">
                            <a href="${route.path}" class="nav-link ${getIsActive(route.path) ? "text-primary" : "text-white"}">${route.label}</a>
                        </li>`
    })
    return routes
}
const navbar = `<div class="col-2 d-flex flex-column p-0 border-end border-secondary">
                <div class="col-12 p-2 bg-dark">
                    <img src="https://placehold.co/1920x1080/webp" class="w-100 h-auto rounded" />
                </div>
                <div class="col-12 flex-grow-1 bg-dark">
                    <nav class="nav flex-column w-100 p-4 text-white">
                        ${renderLinks()}
                    </nav>
                </div>
            </div>`

window.document.addEventListener('DOMContentLoaded', (e => {
    const nav = document.getElementById("nav")
    if (!nav) return

    nav.outerHTML = navbar
}))