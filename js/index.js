/* index.js
- const
- Products
- Cart
- Mini Cart
- Product Grid
- Product Detail
- Hero Home
- Club Slide
- Single Product
- Contact Form */

/* The above code is defining a constant object `STORAGE_KEYS` with a property `cart` that has a value
of `'journ_cart_v1'`. */
const STORAGE_KEYS = {
    cart: 'journ_cart_v1'
}

/* The above JavaScript code is selecting various elements from the HTML document using their IDs. Here
is a summary of what each line of code is doing: */
const popupMenu = document.getElementById('headerPopup')
const productsContainer = document.getElementById('productsContainer')
const clubSliderTrack = document.getElementById('clubSliderTrack')
const clubDots = document.getElementById('clubDots')
const clubPrev = document.getElementById('clubPrev')
const clubNext = document.getElementById('clubNext')
const miniCart = document.getElementById('miniCart')
const miniCartItems = document.getElementById('miniCartItems')
const miniCartSubtotal = document.getElementById('miniCartSubtotal')

/* The above code is defining an array of objects named `products`. Each object in the array represents
a product with properties such as `id`, `image`, `gallery`, `title`, `description`, `contains`,
`edition`, `price`, and `url`. These properties contain information about each product, such as its
image, description, price, and edition. The array `products` contains information about multiple
products that can be displayed on a website or used in an e-commerce application. */
const products = [
    {
        id: 'Welcome Spring',
        image: 'media/spring_complete.webp',
        gallery: ['media/spring_complete.webp', 'media/spring_sticker.webp', 'media/spring_notebook.webp'],
        title: 'Welcome Spring',
        description: 'Ideal para spreads de intención de temporada, mood boards florales, páginas de gratitud, diarios de naturaleza o simplemente para llenar páginas sin ningún plan concreto dejando que los materiales te guíen y sorprendan a cada paso.',
        contains: ['Hojas con textura orgánica (lino y acuarela)', 'Stickers de flores, ramas y elementos botánicos', 'Postales ilustradas de jardín y canasta de picnic', 'Recortes temáticos florales', 'Notebook A5 de tapa suave en lila'],
        edition: 'Edición Primavera 2026',
        price: 15,
        url: 'Producto.html?product=Welcome Spring'
    },
    {
        id: 'beach-vibes',
        image: 'media/summer_complete.webp',
        gallery: ['media/summer_complete.webp', 'media/summer_sticker.webp', 'media/summer_notebook.webp'],
        title: 'Beach Vibes',
        description: 'Perfecto para álbumes de viaje, diarios de vacaciones, colecciones de recuerdos de verano, páginas de listas de planes o simplemente para capturar la vibra de la temporada antes de que se acabe.',
        contains: ['Hoja de color azul con textura de arena', 'Stickers de bikinis, palmeras y cámara fotográfica', 'Stickers de polaroids y estrellas de mar', 'Recortes temáticos de verano', 'Notebook A5 de tapa azul océano'],
        edition: 'Edición Verano 2026',
        price: 15,
        url: 'Producto.html?product=beach-vibes'
    },
    {
        id: 'golden-fall',
        image: 'media/fall_complete.webp',
        gallery: ['media/fall_complete.webp', 'media/fall_stickers.webp', 'media/fall_notebook.webp'],
        title: 'Golden Fall',
        description: 'Ideal para spreads de reflexión de temporada, listas de cosas que te gustan del otoño, álbumes de paseos, páginas de recetas de temporada, journaling introspectivo o para crear el mood board más cálido del año.',
        contains: ['Hojas con patrón de hojas secas y elementos otoñales', 'Imágenes de fogata y paisajes de otoño', 'Stickers de calabazas, nueces y bebidas calientes', 'Hojas de color en paleta otoñal cálida', 'Notebook A5 de tapa en naranja',],
        edition: 'Edición Otoño 2025',
        price: 15,
        url: 'Producto.html?product=golden-fall'
    },
    {
        id: 'disco-fever',
        image: 'media/disco_complete.webp',
        gallery: ['media/disco_complete.webp', 'media/disco_sticker.webp', 'media/disco_notebook.webp'],
        title: 'Disco Fever',
        description: 'Para páginas de celebración, álbumes de noches especiales, journaling de metas conseguidas, spreads de main character energy, listas de cosas que te hacen sentir poderosa o simplemente para crear algo que brille tanto como el momento que estás viviendo.',
        contains: ['Hoja con impresión de lentejuelas y textura metalizada', 'Imágenes con destellos neón y elementos de discoteca', 'Stickers de labios, martinis, estrellas y champaña', 'Recortes temáticos de fiesta y celebración', 'Notebook A5 de tapa rosa',],
        edition: 'Party Edition',
        price: 15,
        url: 'Producto.html?product=disco-fever'
    },
    {
        id: 'tea-time',
        image: 'media/tea_complete.webp',
        gallery: ['media/tea_complete.webp', 'media/tea_stickers.webp', 'media/tea_notebook.webp'],
        title: 'Tea Time',
        description: 'Para journaling lento y tranquilo, spreads de autocuidado, páginas de recetas favoritas, diarios de rutinas matutinas, álbumes de momentos cotidianos o para cualquier tarde en la que necesitas crear algo que se vea tan bonito como se siente.',
        contains: ['Hojas con patrón de pastelitos y vajilla ilustrada', 'Stickers de tazas de café, cubiertos y porcelana', 'Imágenes de jardín con mesa de té', 'Hojas de color en paleta rosa y crema', 'Notebook A5 de tapa rosa empolvado',],
        edition: 'Hora del Té',
        price: 15,
        url: 'Producto.html?product=tea-time'
    },
    {
        id: 'snowheaven',
        image: 'media/xmas_complete.webp',
        gallery: ['media/xmas_complete.webp', 'media/xmas_sticker.webp', 'media/xmas_notebook.webp'],
        title: 'Snow Heaven',
        description: 'Para listas de deseos, tarjetas navideñas artesanales, álbumes de diciembre, spreads de gratitud de fin de año, advent journals o simplemente para disfrutar de la magia de crear algo bonito en la temporada más creativa del año.',
        contains: ['Hojas con patrones navideños', 'Imágenes de paisajes nevados para recortar', 'Imágenes de paisajes nevados y cabañas', 'Stickers de regalos, snow globes y candy canes', 'Recortes temáticos navideños', 'Notebook A5 de tapa en rojo'],
        edition: 'Edición Limitada',
        price: 15,
        url: 'Producto.html?product=snowheaven'
    }
]


/* The above code is creating a Map called `productsById` that maps product IDs to their corresponding
product objects. It is using the `map` method on the `products` array to create an array of
key-value pairs where the key is the product ID and the value is the product object itself. This
array of key-value pairs is then passed to the `Map` constructor to create the `productsById` Map. */
const productsById = new Map(products.map((product) => [product.id, product]))
window.productsData = products

/**
 * The `formatPrice` function in JavaScript formats a given amount as a price with two decimal places
 * and a dollar sign.
 * @param amount - The `amount` parameter in the `formatPrice` function represents the numerical value
 * that you want to format as a price.
 * @returns The function `formatPrice` takes a numerical `amount` as input and returns a string with
 * the amount formatted as a currency with two decimal places, prefixed with a dollar sign.
 */
function formatPrice(amount) {
    return `$${Number(amount).toFixed(2)}`
}

/**
 * The function `getCart` retrieves and processes cart items stored in local storage, ensuring valid
 * data before returning a filtered array of items.
 * @returns The `getCart` function returns an array of cart items with each item having an `id` (as a
 * string) and a `qty` (as a number). The function filters out any items that do not have a valid `id`
 * or if the corresponding product is not found in the `productsById` map. If an error occurs during
 * the process, an empty array is returned.
 */
function getCart() {
    try {
        const raw = localStorage.getItem(STORAGE_KEYS.cart)
        if (!raw) return []
        const parsed = JSON.parse(raw)
        if (!Array.isArray(parsed)) return []

        return parsed
            .map((item) => ({
                id: String(item.id || ''),
                qty: Math.max(1, Number(item.qty) || 1)
            }))
            .filter((item) => productsById.has(item.id))
    } catch {
        return []
    }
}

/**
 * The function `saveCart` saves the cart data to the local storage after converting it to a JSON
 * string.
 * @param cart - The `cart` parameter is typically an object that represents the items in a shopping
 * cart. It may contain information such as the product name, quantity, price, and any other relevant
 * details about the items that the user has added to their cart.
 */
function saveCart(cart) {
    localStorage.setItem(STORAGE_KEYS.cart, JSON.stringify(cart))
}

/**
 * The function `getCartCount` calculates the total quantity of items in a shopping cart.
 * @returns The `getCartCount` function returns the total quantity of items in the cart by summing up
 * the quantity of each item in the cart array.
 */
function getCartCount() {
    return getCart().reduce((sum, item) => sum + item.qty, 0)
}

/**
 * The function `getCartDetailed` retrieves detailed information about items in the cart by mapping
 * each item to its corresponding product and calculating the line total.
 * @returns The `getCartDetailed` function is returning an array of objects that represent the items in
 * the cart with additional details. Each object includes the original item from the cart, the
 * corresponding product details fetched from `productsById`, and the calculated `lineTotal` which is
 * the product price multiplied by the quantity. The function filters out any null values that may
 * result from items not having corresponding product details.
 */
function getCartDetailed() {
    return getCart()
        .map((item) => {
            const product = productsById.get(item.id)
            return product
                ? {
                    ...item,
                    product,
                    lineTotal: product.price * item.qty
                }
                : null
        })
        .filter(Boolean)
}

/**
 * The function `getCartSubtotal` calculates the total cost of items in a shopping cart by summing up
 * the line totals of each item.
 * @returns The function `getCartSubtotal` is returning the total sum of the `lineTotal` property for
 * each item in the cart, calculated by reducing the array returned by `getCartDetailed()`.
 */
function getCartSubtotal() {
    return getCartDetailed().reduce((sum, item) => sum + item.lineTotal, 0)
}

/**
 * The function `getShipping` calculates the shipping cost based on the subtotal amount, with free
 * shipping for subtotals over .
 * @param subtotal - The `getShipping` function calculates the shipping cost based on the subtotal of
 * an order. If the subtotal is less than or equal to 0, the shipping cost is 0. If the subtotal is
 * greater than 0 but less than 150, the shipping cost is . If the
 * @returns The function `getShipping` returns the shipping cost based on the subtotal amount. If the
 * subtotal is less than or equal to 0, it returns 0. If the subtotal is greater than or equal to 150,
 * it also returns 0. Otherwise, it returns a shipping cost of 8.
 */
function getShipping(subtotal) {
    if (subtotal <= 0) return 0
    return subtotal >= 150 ? 0 : 8
}

/**
 * The function `addToCart` adds a product to the cart with a specified quantity or increments the
 * quantity if the product is already in the cart.
 * @param productId - The `productId` parameter in the `addToCart` function represents the unique
 * identifier of the product that you want to add to the cart.
 * @param [quantity=1] - The `quantity` parameter in the `addToCart` function represents the quantity
 * of a product that the user wants to add to the cart. If the `quantity` parameter is not provided
 * when calling the function, it defaults to 1, meaning that by default, the function will add one unit
 * of
 * @returns If the product with the given `productId` exists in the `productsById` map, the function
 * will return `undefined` after updating the cart and rendering the UI.
 */
function addToCart(productId, quantity = 1) {
    if (!productsById.has(productId)) return

    const cart = getCart()
    const existing = cart.find((item) => item.id === productId)

    if (existing) {
        existing.qty += quantity
    } else {
        cart.push({ id: productId, qty: quantity })
    }

    saveCart(cart)
    renderAllCartUI()
}

/**
 * The function `setCartQty` updates the quantity of a product in the cart and saves the changes to the
 * cart.
 * @param productId - The `productId` parameter is the unique identifier of the product in the shopping
 * cart that you want to update the quantity for.
 * @param quantity - The `quantity` parameter in the `setCartQty` function represents the new quantity
 * value that you want to set for a specific product in the cart. It is the updated quantity that you
 * want to assign to the product identified by the `productId`.
 * @returns If the `item` is not found in the `cart`, the function will return early and nothing will
 * be returned explicitly.
 */
function setCartQty(productId, quantity) {
    const nextQty = Math.max(0, Number(quantity) || 0)
    const cart = getCart()
    const item = cart.find((entry) => entry.id === productId)
    if (!item) return

    if (nextQty <= 0) {
        saveCart(cart.filter((entry) => entry.id !== productId))
    } else {
        item.qty = nextQty
        saveCart(cart)
    }

    renderAllCartUI()
}

/**
 * The function removeFromCart removes a product from the cart based on its productId.
 * @param productId - The `productId` parameter is the unique identifier of the product that you want
 * to remove from the cart.
 */
function removeFromCart(productId) {
    const cart = getCart().filter((item) => item.id !== productId)
    saveCart(cart)
    renderAllCartUI()
}

/**
 * The function clearCart clears the cart by saving an empty array and rendering the updated cart UI.
 */
function clearCart() {
    saveCart([])
    renderAllCartUI()
}

/**
 * The `renderCartBadges` function updates the cart badges on a webpage based on the total quantity in
 * the cart.
 */
function renderCartBadges() {
    const totalQty = getCartCount()
    document.querySelectorAll('[data-cart-count]').forEach((badge) => {
        badge.textContent = totalQty
        badge.classList.toggle('has-items', totalQty > 0)
    })
}

/**
 * The `renderMiniCart` function updates the mini cart display with items, quantities, prices, and a
 * remove button for each item.
 * @returns The `renderMiniCart` function is returning the rendered mini cart items with product
 * details such as image, title, quantity, price, and remove button. If the cart is empty, it will
 * display a message indicating that the cart is empty. The subtotal of the cart is also displayed in
 * the mini cart.
 */
function renderMiniCart() {
    if (!miniCart || !miniCartItems || !miniCartSubtotal) return

    const cartItems = getCartDetailed()

    if (!cartItems.length) {
        miniCartItems.innerHTML = '<p class="mini-cart__empty">Tu carrito está vacío.</p>'
        miniCartSubtotal.textContent = formatPrice(0)
        return
    }

    miniCartItems.innerHTML = cartItems.map((item) => `
        <article class="mini-cart__item">
            <img src="${item.product.image}" alt="${item.product.title}">
            <div class="mini-cart__copy">
                <h4>${item.product.title}</h4>
                <p>${item.qty} x ${formatPrice(item.product.price)}</p>
            </div>
            <button class="mini-cart__remove" type="button" data-mini-remove="${item.id}" aria-label="Quitar ${item.product.title}">
                <i class="ri-close-line"></i>
            </button>
        </article>
    `).join('')

    miniCartSubtotal.textContent = formatPrice(getCartSubtotal())
}

/**
 * The function `toggleMiniCart` toggles the visibility of a mini cart element based on the `forceOpen`
 * parameter.
 * @param forceOpen - The `forceOpen` parameter is a boolean value that determines whether the mini
 * cart should be forcefully opened or closed. If `forceOpen` is `true`, the mini cart will be opened
 * regardless of its current state. If `forceOpen` is `false`, the mini cart will be closed regardless
 * @returns The function `toggleMiniCart` will return `undefined` if the condition `if (!miniCart)` is
 * true, meaning that the `miniCart` variable is falsy. Otherwise, if the condition is false, the
 * function will not explicitly return a value, so it will implicitly return `undefined`.
 */
function toggleMiniCart(forceOpen) {
    if (!miniCart) return
    const shouldOpen = typeof forceOpen === 'boolean' ? forceOpen : !miniCart.classList.contains('active')
    miniCart.classList.toggle('active', shouldOpen)
}

/**
 * The `renderProductGrid` function dynamically renders product cards based on the specified view and
 * limit.
 * @returns The `renderProductGrid` function is returning the rendered product grid based on the
 * specified conditions and data provided.
 */
function renderProductGrid() {
    if (!productsContainer) return

    const pageView = document.body?.dataset.productsView || 'all'
    const limit = Number(document.body?.dataset.productsLimit || 4)
    const sourceProducts = pageView === 'latest'
        ? [...products].slice(0, limit)
        : products

    productsContainer.innerHTML = ''

    sourceProducts.forEach((product) => {
        const productCard = document.createElement('div')
        productCard.classList.add('product__card')
        productCard.innerHTML = `
            <a href="${product.url}" class="product__card-link" title="${product.title}">
                <span class="product__cta">Ver más</span>
                <div class="product__image-wrap">
                    <img class="product__image" src="${product.image}" alt="${product.title}">
                </div>
                <div class="product__card-footer">
                    <div class="product__copy">
                        <h4>${product.title}</h4>
                        <p>${product.edition}</p>
                    </div>
                    <span class="product__price">${formatPrice(product.price)}</span>
                </div>
            </a>
        `
        productsContainer.appendChild(productCard)
    })
}

/**
 * The `renderProductDetail` function dynamically renders product details on a webpage based on the
 * product ID in the URL parameters.
 * @returns The `renderProductDetail` function returns the rendered HTML content for displaying a
 * single product detail on a web page.
 */
function renderProductDetail() {
    const container = document.getElementById('productDetail')
    if (!container) return

    const params = new URLSearchParams(window.location.search)
    const productId = params.get('product') || products[0]?.id
    const product = productsById.get(productId) || products[0]

    container.innerHTML = `
        <article class="single-product">
            <div class="single-product__media">
                <div class="single-product__image-wrap">
                    <img id="productMainImage" class="single-product__image" src="${product.gallery[0]}" alt="${product.title}">
                </div>
                <div class="single-product__thumbs" role="tablist" aria-label="Galería del producto">
                    ${product.gallery.map((img, index) => `
                        <button class="single-product__thumb ${index === 0 ? 'is-active' : ''}" type="button" data-product-thumb="${img}" aria-label="Ver imagen ${index + 1}"></button>
                    `).join('')}
                </div>
            </div>

            <div class="single-product__content">
                <div class="single-product__head">
                    <div>
                        <h2>${product.title}</h2>
                        <p class="single-product__edition">${product.edition}</p>
                    </div>
                    <strong class="single-product__price">${formatPrice(product.price)}</strong>
                </div>

                <div class="single-product__section">
                    <h4>Descripción</h4>
                    <p>${product.description}</p>
                </div>

                <div class="single-product__section">
                    <h4>Contiene</h4>
                    <ul>
                        ${product.contains.map((line) => `<li>${line}</li>`).join('')}
                    </ul>
                </div>

                <div class="single-product__actions">
                    <button class="btn" type="button" data-add-to-cart="${product.id}">Agregar al carrito</button>
                </div>
            </div>
        </article>
    `
}

/**
 * The `renderCartPage` function dynamically updates the cart page with items, quantities, prices, and
 * total based on the cart data.
 * @returns The `renderCartPage` function is returning the rendered content for the cart items,
 * subtotal, shipping cost, and total cost based on the items in the cart. If the cart is empty, it
 * displays a message and links to explore kits. If there are items in the cart, it displays each item
 * with its details, quantity, and total price. Finally, it updates the subtotal, shipping cost
 */
function renderCartPage() {
    const cartItemsContainer = document.getElementById('cartItems')
    const cartSubtotal = document.getElementById('cartSubtotal')
    const cartShipping = document.getElementById('cartShipping')
    const cartTotal = document.getElementById('cartTotal')
    if (!cartItemsContainer) return

    const cartItems = getCartDetailed()

    if (!cartItems.length) {
        cartItemsContainer.innerHTML = `
            <div class="cart__empty">
                <h4>Tu carrito está vacío</h4>
                <p>Explora los kits y añade tus favoritos para empezar a crear.</p>
                <a class="btn" href="Kits.html">Ver kits</a>
            </div>
        `
        if (cartSubtotal) cartSubtotal.textContent = formatPrice(0)
        if (cartShipping) cartShipping.textContent = formatPrice(0)
        if (cartTotal) cartTotal.textContent = formatPrice(0)
        return
    }

    cartItemsContainer.innerHTML = cartItems.map((item) => `
        <article class="cart-item">
            <img class="cart-item__image" src="${item.product.image}" alt="${item.product.title}">
            <div class="cart-item__copy">
                <h4>${item.product.title}</h4>
                <p>${item.product.edition}</p>
                <button class="cart-item__remove" type="button" data-cart-remove="${item.id}">Eliminar</button>
            </div>
            <div class="cart-item__qty">
                <button type="button" data-cart-dec="${item.id}" aria-label="Restar unidad">-</button>
                <span>${item.qty}</span>
                <button type="button" data-cart-inc="${item.id}" aria-label="Sumar unidad">+</button>
            </div>
            <strong class="cart-item__total">${formatPrice(item.lineTotal)}</strong>
        </article>
    `).join('')

    const subtotal = getCartSubtotal()
    const shipping = getShipping(subtotal)
    const total = subtotal + shipping

    if (cartSubtotal) cartSubtotal.textContent = formatPrice(subtotal)
    if (cartShipping) cartShipping.textContent = formatPrice(shipping)
    if (cartTotal) cartTotal.textContent = formatPrice(total)
}

/**
 * The `renderCheckoutPage` function handles rendering the checkout page with cart items, subtotal,
 * shipping, total, and a form submission event listener.
 * @returns The `renderCheckoutPage` function does not explicitly return any value. It is a function
 * that renders the checkout page based on the cart items and updates the checkout summary and form
 * accordingly.
 */
function renderCheckoutPage() {
    const checkoutSummary = document.getElementById('checkoutSummary')
    const checkoutForm = document.getElementById('checkoutForm')
    const checkoutSuccess = document.getElementById('checkoutSuccess')
    if (!checkoutSummary || !checkoutForm) return

    const cartItems = getCartDetailed()

    if (!cartItems.length) {
        checkoutSummary.innerHTML = `
            <div class="checkout__empty">
                <h4>No hay productos para finalizar compra</h4>
                <a class="btn" href="Kits.html">Ir a la tienda</a>
            </div>
        `
        checkoutForm.querySelector('button[type="submit"]')?.setAttribute('disabled', 'true')
        return
    }

    const subtotal = getCartSubtotal()
    const shipping = getShipping(subtotal)
    const total = subtotal + shipping

    checkoutSummary.innerHTML = `
        <div class="checkout-summary__items">
            ${cartItems.map((item) => `
                <div class="checkout-summary__item">
                    <span>${item.product.title} x${item.qty}</span>
                    <span>${formatPrice(item.lineTotal)}</span>
                </div>
            `).join('')}
        </div>
        <div class="checkout-summary__totals">
            <div><span>Subtotal</span><strong>${formatPrice(subtotal)}</strong></div>
            <div><span>Envío</span><strong>${formatPrice(shipping)}</strong></div>
            <div class="is-total"><span>Total</span><strong>${formatPrice(total)}</strong></div>
        </div>
    `

    checkoutForm.addEventListener('submit', (event) => {
        event.preventDefault()
        const formData = new FormData(checkoutForm)
        const customerName = String(formData.get('nombre') || '').trim() || 'cliente'

        clearCart()
        checkoutForm.reset()

        if (checkoutSuccess) {
            checkoutSuccess.innerHTML = `<p>Gracias, ${customerName}. Tu pedido fue registrado correctamente.</p>`
            checkoutSuccess.classList.add('active')
        }

        renderCheckoutPage()
    })
}

/**
 * The function `renderAllCartUI` is responsible for rendering various components related to the
 * shopping cart user interface.
 */
function renderAllCartUI() {
    renderCartBadges()
    renderMiniCart()
    renderCartPage()
    renderCheckoutPage()
}

/* The above code defines a function named `openMenu` that toggles the 'active' class on an element
with the id `popupMenu`. If `popupMenu` is not defined or is falsy, the function will return early
without doing anything. */
window.openMenu = function openMenu() {
    if (!popupMenu) return
    popupMenu.classList.toggle('active')
}

/* The above JavaScript code is setting up variables and constants for handling mouse drag events on a
canvas element. It initializes variables for tracking the active element being dragged, the starting
position of the drag, the origin position of the element, and a flag for checking if dragging is
occurring. The `DRAG_THRESHOLD` constant is set to 6, which likely represents the minimum distance
the mouse needs to move before considering it a drag action. */
const canvas = document.getElementById('canvas')
let active = null
let startX = 0
let startY = 0
let originX = 0
let originY = 0
let isDragging = false
const DRAG_THRESHOLD = 6

/**
 * The function `layoutFromData` positions elements with class 'piece' based on their data attributes
 * relative to the size of the canvas.
 * @returns If the `canvas` element is not found or does not exist, the function will return early and
 * not execute the rest of the code block.
 */
function layoutFromData() {
    if (!canvas) return
    const rect = canvas.getBoundingClientRect()
    document.querySelectorAll('.piece').forEach((el) => {
        const px = parseFloat(el.dataset.x || 50) / 100
        const py = parseFloat(el.dataset.y || 50) / 100
        const x = rect.width * px
        const y = rect.height * py
        el.style.left = `${x}px`
        el.style.top = `${y}px`
    })
}

/* The above code is adding an event listener to the window object for the 'resize' event. When the
window is resized, the function `layoutFromData` is called. Additionally, the `layoutFromData`
function is immediately called after the event listener is added. */
window.addEventListener('resize', layoutFromData)
layoutFromData()

/* The above code is implementing drag-and-drop functionality for elements with the class 'piece' on a
canvas element. When a user double-clicks on a piece, it prevents the default behavior. When a user
clicks on a piece and starts dragging it, the piece follows the cursor's movement. The dragging
behavior is initiated after the cursor moves a certain distance defined by the DRAG_THRESHOLD
constant. The 'is-pressed' class is added to the active piece while it is being dragged. The
dragging behavior ends when the user releases the pointer or cancels the pointer event. */
if (canvas) {
    canvas.addEventListener('dblclick', (event) => event.preventDefault())

    canvas.addEventListener('pointerdown', (event) => {
        const target = event.target.closest('.piece')
        if (!target) return

        active = target
        active.setPointerCapture(event.pointerId)

        const rect = active.getBoundingClientRect()
        startX = event.clientX
        startY = event.clientY
        originX = rect.left + rect.width / 2
        originY = rect.top + rect.height / 2

        isDragging = false
        active.style.zIndex = Date.now().toString()
    })

    canvas.addEventListener('pointermove', (event) => {
        if (!active) return

        const dx = event.clientX - startX
        const dy = event.clientY - startY

        if (!isDragging) {
            if (Math.hypot(dx, dy) < DRAG_THRESHOLD) return
            isDragging = true
            active.classList.add('is-pressed')
        }

        active.style.left = `${originX + dx}px`
        active.style.top = `${originY + dy}px`
    })

    function endDrag(event) {
        if (!active) return
        if (isDragging) active.classList.remove('is-pressed')
        active.releasePointerCapture(event.pointerId)
        active = null
        isDragging = false
    }

    canvas.addEventListener('pointerup', endDrag)
    canvas.addEventListener('pointercancel', endDrag)
}

/* The above code is creating an array called `clubSlides` that contains objects with properties
`image` and `alt`. Each object represents a slide for a club presentation and includes an image
source and an alternative text description. */
const clubSlides = [
    { image: 'media/club_amber.webp', alt: 'Notebook para inspirar una página de journaling' },
    { image: 'media/club_ann.webp', alt: 'Notebook para inspirar una página de journaling' },
    { image: 'media/club_kia.webp', alt: 'Notebook para inspirar una página de journaling' },
    { image: 'media/club_luna.webp', alt: 'Notebook para inspirar una página de journaling' },
    { image: 'media/club_rona.webp', alt: 'Notebook para inspirar una página de journaling' }
]

/* The above code in JavaScript is declaring two variables: `activeClubSlide` initialized to 0 and
`clubAutoplay` which is not initialized. The code seems to be related to a slideshow functionality
for a club, where `activeClubSlide` is likely used to keep track of the current slide being
displayed. The purpose of `clubAutoplay` is not clear from the provided snippet, but it might be
used to control the autoplay feature of the slideshow. */
let activeClubSlide = 0
let clubAutoplay

/**
 * The function `renderClubSlider` creates slider elements for a club website with images and
 * navigation dots.
 * @returns The `renderClubSlider` function does not return any value explicitly. It is a void function
 * that performs operations on the DOM elements related to a club slider, such as creating slide
 * elements and dots for navigation.
 */
function renderClubSlider() {
    if (!clubSliderTrack || !clubDots) return

    clubSliderTrack.innerHTML = ''
    clubDots.innerHTML = ''

    clubSlides.forEach((slide, index) => {
        const article = document.createElement('article')
        article.classList.add('club__slide')
        article.innerHTML = `<img src="${slide.image}" alt="${slide.alt}" class="club__image">`
        clubSliderTrack.appendChild(article)

        const dot = document.createElement('button')
        dot.classList.add('club__dot')
        dot.type = 'button'
        dot.setAttribute('aria-label', `Ir a la imagen ${index + 1}`)
        dot.addEventListener('click', () => {
            activeClubSlide = index
            updateClubSlider()
            restartClubAutoplay()
        })
        clubDots.appendChild(dot)
    })

    updateClubSlider(false)
}

/**
 * The function `updateClubSlider` updates the position of a slider track and toggles active classes on
 * slides and dots based on the active slide index.
 * @param [animate=true] - The `animate` parameter in the `updateClubSlider` function is a boolean
 * parameter that determines whether the slider movement should be animated or not. When `animate` is
 * set to `true`, the slider will transition smoothly to the new position using CSS transitions. If
 * `animate` is set to `
 * @returns The `updateClubSlider` function returns nothing (`undefined`) as it does not have a return
 * statement. It is a function that updates the club slider by adjusting the position of the slides and
 * dots based on the active slide.
 */
function updateClubSlider(animate = true) {
    if (!clubSliderTrack || !clubDots) return

    const slides = [...clubSliderTrack.children]
    const dots = [...clubDots.children]
    const viewport = clubSliderTrack.parentElement

    if (!slides.length || !viewport) return

    const activeSlide = slides[activeClubSlide]
    const targetCenter = activeSlide.offsetLeft + (activeSlide.offsetWidth / 2)
    const viewportCenter = viewport.offsetWidth / 2
    const minTranslate = viewport.offsetWidth - clubSliderTrack.scrollWidth
    const rawTranslate = viewportCenter - targetCenter
    const translate = Math.max(minTranslate, Math.min(0, rawTranslate))

    clubSliderTrack.style.transition = animate ? 'transform 0.55s ease' : 'none'
    clubSliderTrack.style.transform = `translateX(${translate}px)`

    slides.forEach((slide, index) => slide.classList.toggle('is-active', index === activeClubSlide))
    dots.forEach((dot, index) => dot.classList.toggle('is-active', index === activeClubSlide))
}

/**
 * The function `goToClubSlide` updates the active club slide based on the direction provided and then
 * updates the club slider accordingly.
 * @param direction - The `direction` parameter in the `goToClubSlide` function is used to determine
 * whether to move to the next slide or the previous slide in a carousel/slider of club slides. It can
 * have a value of either 1 (for moving to the next slide) or -1 (for moving
 */
function goToClubSlide(direction) {
    activeClubSlide = (activeClubSlide + direction + clubSlides.length) % clubSlides.length
    updateClubSlider()
    restartClubAutoplay()
}

/**
 * The function `startClubAutoplay` initiates an interval to automatically cycle through club slides at
 * a set time interval.
 * @returns If the `clubSlides` array is empty, the function `startClubAutoplay` will return early
 * without setting up the interval for autoplay.
 */
function startClubAutoplay() {
    if (!clubSlides.length) return

    clubAutoplay = window.setInterval(() => {
        activeClubSlide = (activeClubSlide + 1) % clubSlides.length
        updateClubSlider()
    }, 3500)
}

/**
 * The function restarts the autoplay feature of a club by clearing the interval and then starting it
 * again.
 */
function restartClubAutoplay() {
    window.clearInterval(clubAutoplay)
    startClubAutoplay()
}

/* The above JavaScript code is setting up functionality for a club slider. Here is a breakdown of what
the code is doing: */
if (clubSliderTrack && clubDots && clubPrev && clubNext) {
    renderClubSlider()

    clubPrev.addEventListener('click', () => goToClubSlide(-1))
    clubNext.addEventListener('click', () => goToClubSlide(1))

    window.addEventListener('resize', () => updateClubSlider(false))

    const clubSection = clubSliderTrack.closest('.club')
    clubSection?.addEventListener('mouseenter', () => window.clearInterval(clubAutoplay))
    clubSection?.addEventListener('mouseleave', startClubAutoplay)

    startClubAutoplay()
}

/* The above JavaScript code is adding event listeners to handle various interactions on a website
related to a shopping cart functionality. Here is a breakdown of what the code is doing: */
document.addEventListener('click', (event) => {
    const addButton = event.target.closest('[data-add-to-cart]')
    if (addButton) {
        event.preventDefault()
        addToCart(addButton.dataset.addToCart)
        toggleMiniCart(true)
        return
    }

    const miniRemoveButton = event.target.closest('[data-mini-remove]')
    if (miniRemoveButton) {
        removeFromCart(miniRemoveButton.dataset.miniRemove)
        return
    }

    const cartDec = event.target.closest('[data-cart-dec]')
    if (cartDec) {
        const id = cartDec.dataset.cartDec
        const item = getCart().find((entry) => entry.id === id)
        if (item) setCartQty(id, item.qty - 1)
        return
    }

    const cartInc = event.target.closest('[data-cart-inc]')
    if (cartInc) {
        const id = cartInc.dataset.cartInc
        const item = getCart().find((entry) => entry.id === id)
        if (item) setCartQty(id, item.qty + 1)
        return
    }

    const cartRemove = event.target.closest('[data-cart-remove]')
    if (cartRemove) {
        removeFromCart(cartRemove.dataset.cartRemove)
        return
    }

    const thumb = event.target.closest('[data-product-thumb]')
    if (thumb) {
        const mainImage = document.getElementById('productMainImage')
        if (mainImage) mainImage.src = thumb.dataset.productThumb
        document.querySelectorAll('.single-product__thumb').forEach((dot) => dot.classList.remove('is-active'))
        thumb.classList.add('is-active')
        return
    }

    const cartToggle = event.target.closest('[data-cart-toggle]')
    if (cartToggle) {
        event.preventDefault()
        toggleMiniCart()
        return
    }

    if (miniCart && miniCart.classList.contains('active')) {
        const clickedInsideMiniCart = event.target.closest('#miniCart')
        const clickedToggle = event.target.closest('[data-cart-toggle]')
        if (!clickedInsideMiniCart && !clickedToggle) {
            toggleMiniCart(false)
        }
    }
})
/* The above code is a comment block in JavaScript. It appears to be describing the functions
`renderProductGrid()`, `renderProductDetail()`, and `renderAllCartUI()`*/
renderProductGrid()
renderProductDetail()
renderAllCartUI()

/* The above JavaScript code is adding an event listener to a form with the id 'registroForm'. When the
form is submitted, it prevents the default form submission behavior using `e.preventDefault()`, sets
the text content of an element with the id 'msg' to '¡Recibido! En breve conectamos el envío real.',
and then resets the form. This code is likely used to handle form submissions and provide feedback
to the user. */
const form = document.getElementById('registroForm');
const msg = document.getElementById('msg');

form.addEventListener('submit', (e) => {
    e.preventDefault(); // evita envío real
    msg.textContent = '¡Recibido! En breve nos contactaremos contigo.';
    form.reset();
});