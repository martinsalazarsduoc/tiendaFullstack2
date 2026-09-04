# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project overview

A static e-commerce front-end mockup ("PruebaFullStack1") built with plain HTML, vanilla JavaScript, and Bootstrap 5 (loaded via CDN, no npm install needed). There is no build step, no bundler, no package.json, and no test suite — every page is opened/served as a raw `.html` file and scripts run directly in the browser.

Content is in Spanish (labels like "Iniciar sesión", "Carrito", "Empleados").

## Running the project

There is no dev server or build command. Open `index.html` (or any file under `src/pages/`) directly in a browser, or serve the repo root with any static file server, e.g.:

```bash
python3 -m http.server 8000
```

Then visit `http://localhost:8000/index.html`. Serving from the repo root matters because scripts/pages reference paths like `/src/pages/...` and `../../style.css` relative to that root.

## Architecture

**No module system.** Despite some files using `export default` (`src/utils/getCart.js`) or `require` (`src/utils/calculateCartTotal.js`), there is no bundler or `<script type="module">` — pages load scripts as plain global `<script src="...">` tags. Treat any `export`/`require` usage as currently broken/inconsistent rather than a working pattern; new code should stick to plain global scripts unless you introduce real module loading across the whole page.

**Page + component pairing.** Each HTML page under `src/pages/` (and `index.html` at the root) is a self-contained document that pulls in Bootstrap from CDN, then one or more component scripts from `src/components/` at the bottom of `<body>`. Components are pure side-effecting scripts, not reusable modules: each one does `window.document.addEventListener("DOMContentLoaded", ...)`, looks up a specific element by `id` (e.g. `#nav`, `#productContainer`, `#cart-product-list`), bails out early with `if (!el) return` if that id isn't on the page, and then mutates `innerHTML`/`outerHTML` with a template string to render its markup. This "no-op if my mount point isn't present" convention is why the same script (e.g. `navbar.js`) can be safely included on many different pages.

**Two separate navbars.** `src/components/navbar.js` renders the public-site navbar into `#nav` (used by `index.html`, `products.html`, `cart.html`, `news.html`, `product_detail.html`, `register.html`). `src/components/admin/adminNavbar.js` renders a distinct sidebar navbar into `#nav` for admin pages (`src/pages/admin/*.html`), and derives the "active" link by comparing `window.location.pathname` against a hardcoded `routeList` (several of those routes — orders, inventary, reports, customers — don't have corresponding HTML pages yet).

**Cart state lives in `localStorage`.** The key `"carrito"` holds a JSON array of `{ id, nombre, precio }`. `src/components/products.js` and `src/utils/getCart.js` read/write it directly (there's no shared cart module actually wired up — `getCart.js` exports a helper but `calculateCartTotal.js` re-implements the same localStorage read inline instead of importing it, since there's no module loader). When touching cart logic, check both `src/components/cart/productCard.js` (renders cart line items) and `src/utils/calculateCartTotal.js` (computes the total) since they duplicate cart-reading logic rather than sharing it.

**Admin "employees" uses the same localStorage pattern.** `src/utils/registerForm.js` stores new users under the `"userList"` key and re-renders the table in `src/pages/admin/employees.html` on every submit. There's no real auth/backend — "register" here just means adding a row to this local table, separate from `src/pages/register.html` (the public user-registration page), which is unrelated.

**No real backend/routing.** Links like `/products/single?id=${i}` (in `productsHomeList.js`) and admin routes for pages that don't exist yet are placeholders; there is no router or server handling these paths.

## Known rough edges to be aware of

- `index.html` has a duplicated/malformed `<script src="./src/components/navbar.js" />` self-closing tag before the real `<script>...</script>` tags, and a `</body>` closed twice — be careful when editing that file's structure.
- `src/utils/calculateCartTotal.js` references an undefined `cantidad` variable in its reduce loop and duplicates cart-loading logic that already exists in `getCart.js`.
