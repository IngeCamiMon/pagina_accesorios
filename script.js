const productos = [
    {
        id: 1,
        nombre: 'Funda Silicona iPhone 14',
        categoria: 'fundas',
        descripcion: 'Funda de silicona suave con interior de microfibra y protección total.',
        imagen: 'img/productos/Funda_Silicona_iPhone_14.jpeg',
        precio: '$59.900'
    },
    {
        id: 2,
        nombre: 'Protector Pantalla Samsung S23',
        categoria: 'protectores',
        descripcion: 'Cristal templado 9H con resistencia a rayones y huellas.',
        imagen: 'img/productos/Protector_Pantalla_Samsung_S23.jpeg',
        precio: '$39.900'
    },
    {
        id: 3,
        nombre: 'Cargador USB-C 25W',
        categoria: 'cargadores',
        descripcion: 'Cargador rápido compatible con dispositivos USB-C y iPhone.',
        imagen: 'img/productos/Cargador_USBC_25W.jpeg',
        precio: '$89.900'
    },
    {
        id: 4,
        nombre: 'Audífonos Bluetooth',
        categoria: 'audifonos',
        descripcion: 'Audio inmersivo con diseño ergonómico y batería de larga duración.',
        imagen: 'img/productos/Audífonos_Bluetooth.jpeg',
        precio: '$149.900'
    },
    {
        id: 5,
        nombre: 'Soporte para Auto',
        categoria: 'soportes',
        descripcion: 'Soporte magnético para tablero o rejilla con montaje seguro.',
        imagen: 'img/productos/Soporte_para_Auto.jpeg',
        precio: '$69.900'
    },
    {
        id: 6,
        nombre: 'Funda Antigolpes Xiaomi',
        categoria: 'fundas',
        descripcion: 'Protección reforzada en esquinas y textura antideslizante.',
        imagen: 'img/productos/Funda_Antigolpes_Xiaomi.jpeg',
        precio: '$64.900'
    },
    {
        id: 7,
        nombre: 'Cable USB-C 2m',
        categoria: 'cargadores',
        descripcion: 'Cable reforzado con nylon y transferencia rápida de energía.',
        imagen: 'img/productos/Cable_USBC_2m.jpeg',
        precio: '$29.900'
    },
    {
        id: 8,
        nombre: 'Protector Cámara iPhone',
        categoria: 'protectores',
        descripcion: 'Cristal con cobertura completa para lentes de cámara.',
        imagen: 'img/productos/Protector_Camara_iPhone.jpeg',
        precio: '$24.900'
    },
    {
        id: 9,
        nombre: 'Adaptador 35W',
        categoria: 'cargadores',
        descripcion: 'Adaptador potente para carga rápida y compatibilidad moderna.',
        imagen: 'img/productos/adapatador_35w.jpg',
        precio: '$99.900'
    },
    {
        id: 10,
        nombre: 'Adaptador Samsung',
        categoria: 'cargadores',
        descripcion: 'Adaptador diseñado para equipos Samsung con carga estable.',
        imagen: 'img/productos/adapatador_samsung.jpg',
        precio: '$79.900'
    },
    {
        id: 11,
        nombre: 'AirPods Pro',
        categoria: 'audifonos',
        descripcion: 'Estuche premium y audio de alta fidelidad para uso diario.',
        imagen: 'img/productos/airpods_pro.jpg',
        precio: '$179.900'
    },
    {
        id: 12,
        nombre: 'Funda Transparente iPhone',
        categoria: 'fundas',
        descripcion: 'Estética elegante y protección anti-amarillo para uso continuo.',
        imagen: 'img/productos/funda_iphone_transparente.jpg',
        precio: '$54.900'
    },
    {
        id: 13,
        nombre: 'Funda iPhone Diseño',
        categoria: 'fundas',
        descripcion: 'Funda mínima, moderna y resistente para un estilo más premium.',
        imagen: 'img/productos/funda_iphone2.jpg',
        precio: '$62.900'
    },
    {
        id: 14,
        nombre: 'Funda iPhone Colores',
        categoria: 'fundas',
        descripcion: 'Variedad de colores para personalizar y proteger tu equipo.',
        imagen: 'img/productos/funda_iphone.jpg',
        precio: '$57.900'
    },
    {
        id: 15,
        nombre: 'AirPods Serie 4',
        categoria: 'audifonos',
        descripcion: 'Audio envolvente con conexión rápida y gran comodidad.',
        imagen: 'img/productos/airpods_serie4.jpg',
        precio: '$169.900'
    },
    {
        id: 16,
        nombre: 'AirPods',
        categoria: 'audifonos',
        descripcion: 'Modelo clásico con batería sólida y diseño ultracompacto.',
        imagen: 'img/productos/airpods.jpg',
        precio: '$129.900'
    },
    {
        id: 17,
        nombre: 'Audífonos Inalámbricos',
        categoria: 'audifonos',
        descripcion: 'Experiencia sonora completa con excelente calidad de llamada.',
        imagen: 'img/productos/audifonos_i12.jpg',
        precio: '$139.900'
    },
    {
        id: 18,
        nombre: 'Armadura',
        categoria: 'fundas',
        descripcion: 'Funda resistente con diseño protectivo para desgaste diario.',
        imagen: 'img/productos/armadura.jpg',
        precio: '$74.900'
    },
    {
        id: 19,
        nombre: 'Batería Power Bank iPhone',
        categoria: 'cargadores',
        descripcion: 'Power bank portátil con carga rápida y gran capacidad.',
        imagen: 'img/productos/batria_iphon_portatil.jpg',
        precio: '$119.900'
    },
    {
        id: 20,
        nombre: 'Accesorio Celular',
        categoria: 'accesorios',
        descripcion: 'Complemento práctico para mejorar la experiencia del día a día.',
        imagen: 'img/productos/accesorio_celular.jpg',
        precio: '$44.900'
    },
    {
        id: 21,
        nombre: 'Alexa Voz',
        categoria: 'accesorios',
        descripcion: 'Asistente inteligente con controles por voz y automatización.',
        imagen: 'img/productos/alexa_voz.jpg',
        precio: '$99.900'
    },
    {
        id: 22,
        nombre: 'Armadura 2',
        categoria: 'fundas',
        descripcion: 'Versión reforzada con mejor agarre y protección de esquinas.',
        imagen: 'img/productos/armadura_2.jpg',
        precio: '$79.900'
    },
    {
        id: 23,
        nombre: 'Armadura Samsung',
        categoria: 'fundas',
        descripcion: 'Funda tipo armadura con estilo robusto para Samsung.',
        imagen: 'img/productos/armadura_samsung.jpg',
        precio: '$83.900'
    },
    {
        id: 24,
        nombre: 'Audífonos Redmi',
        categoria: 'audifonos',
        descripcion: 'Audio claro, diseño cómodo y excelente rendimiento general.',
        imagen: 'img/productos/audifonos_redmi.jpg',
        precio: '$119.900'
    },
    {
        id: 25,
        nombre: 'Audífonos Xiaomi',
        categoria: 'audifonos',
        descripcion: 'Altavoz potente y durabilidad ideal para uso diario.',
        imagen: 'img/productos/audifonos_xiami.jpg',
        precio: '$109.900'
    },
    {
        id: 26,
        nombre: 'Bafle Portátil',
        categoria: 'accesorios',
        descripcion: 'Bafle portátil con sonido potente para uso en exteriores.',
        imagen: 'img/productos/bafle.jpg',
        precio: '$189.900'
    }
];

const categoriaLabels = {
    todos: 'Todos',
    fundas: 'Fundas',
    protectores: 'Protectores',
    cargadores: 'Cargadores',
    audifonos: 'Audífonos',
    soportes: 'Soportes',
    accesorios: 'Accesorios'
};

function normalizarCategoria(categoria) {
    return String(categoria || '')
        .trim()
        .toLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .replace(/\s+/g, '');
}

function cargarProductos(filtro = 'todos') {
    const contenedor = document.getElementById('productos-container');
    contenedor.innerHTML = '';

    const filtroNormalizado = normalizarCategoria(filtro);
    const productosFiltrados = filtroNormalizado === 'todos'
        ? productos
        : productos.filter(producto => normalizarCategoria(producto.categoria) === filtroNormalizado);

    if (!productosFiltrados.length) {
        contenedor.innerHTML = '<p class="empty-state">No hay productos disponibles en esta categoría.</p>';
        return;
    }

    productosFiltrados.forEach(producto => {
        const productoElement = document.createElement('article');
        productoElement.className = 'producto';
        productoElement.innerHTML = `
            <img src="${producto.imagen}" alt="${producto.nombre}" class="producto-img">
            <div class="producto-info">
                <div class="producto-tags">
                    <span class="producto-categoria">${categoriaLabels[normalizarCategoria(producto.categoria)] || producto.categoria}</span>
                    <span class="producto-precio">${producto.precio}</span>
                </div>
                <h3 class="producto-nombre">${producto.nombre}</h3>
                <p class="producto-descripcion">${producto.descripcion}</p>
                <button class="btn-comprar" data-id="${producto.id}">Añadir al carrito</button>
            </div>
        `;
        contenedor.appendChild(productoElement);
    });

    document.querySelectorAll('.btn-comprar').forEach(boton => {
        boton.addEventListener('click', (event) => {
            const productoId = Number(event.currentTarget.getAttribute('data-id'));
            agregarAlCarrito(productoId);
        });
    });
}

function agregarAlCarrito(productoId) {
    const producto = productos.find(item => item.id === productoId);
    if (!producto) return;

    const item = carrito.find(entry => entry.id === productoId);
    if (item) {
        item.cantidad += 1;
    } else {
        carrito.push({ ...producto, cantidad: 1 });
    }

    guardarCarrito();
    actualizarCarrito();
    abrirCarrito();
}

const WHATSAPP_NUMBER = '573102774974';
let carrito = JSON.parse(localStorage.getItem('tecnologyjc-carrito') || '[]');

function guardarCarrito() {
    localStorage.setItem('tecnologyjc-carrito', JSON.stringify(carrito));
}

function formatoPrecio(precio) {
    return Number(precio.replace(/\D/g, '')) || 0;
}

function actualizarCarrito() {
    const itemsContainer = document.querySelector('.cart-items');
    const count = document.querySelector('.cart-count');
    const total = document.querySelector('.cart-total strong');
    if (!itemsContainer || !count || !total) return;

    const cantidadTotal = carrito.reduce((sum, item) => sum + item.cantidad, 0);
    const totalCompra = carrito.reduce((sum, item) => sum + formatoPrecio(item.precio) * item.cantidad, 0);
    count.textContent = cantidadTotal;
    total.textContent = `$${totalCompra.toLocaleString('es-CO')}`;

    if (!carrito.length) {
        itemsContainer.innerHTML = '<p class="empty-cart">Tu carrito está vacío. Añade productos para comenzar.</p>';
        return;
    }

    itemsContainer.innerHTML = carrito.map(item => `
        <article class="cart-item">
            <img src="${item.imagen}" alt="${item.nombre}">
            <div>
                <h3>${item.nombre}</h3>
                <p>${item.precio} · ${item.cantidad} unidad${item.cantidad === 1 ? '' : 'es'}</p>
            </div>
            <div class="cart-item-actions">
                <button class="quantity-btn" type="button" data-action="decrease" data-id="${item.id}" aria-label="Disminuir cantidad">−</button>
                <button class="quantity-btn" type="button" data-action="increase" data-id="${item.id}" aria-label="Aumentar cantidad">+</button>
                <button class="remove-item" type="button" data-action="remove" data-id="${item.id}" aria-label="Eliminar producto">×</button>
            </div>
        </article>
    `).join('');
}

function abrirCarrito() {
    const drawer = document.querySelector('.cart-drawer');
    const overlay = document.querySelector('.cart-overlay');
    const toggle = document.querySelector('.cart-toggle');
    if (!drawer || !overlay || !toggle) return;
    drawer.classList.add('open');
    drawer.setAttribute('aria-hidden', 'false');
    overlay.classList.add('visible');
    toggle.setAttribute('aria-expanded', 'true');
}

function cerrarCarrito() {
    const drawer = document.querySelector('.cart-drawer');
    const overlay = document.querySelector('.cart-overlay');
    const toggle = document.querySelector('.cart-toggle');
    if (!drawer || !overlay || !toggle) return;
    drawer.classList.remove('open');
    drawer.setAttribute('aria-hidden', 'true');
    overlay.classList.remove('visible');
    toggle.setAttribute('aria-expanded', 'false');
}

function enviarPedidoPorWhatsApp() {
    if (!carrito.length) {
        abrirCarrito();
        return;
    }

    const lineas = carrito.map(item => `- ${item.nombre} x${item.cantidad}: ${item.precio}`);
    const total = carrito.reduce((sum, item) => sum + formatoPrecio(item.precio) * item.cantidad, 0);
    const mensaje = [
        'Hola, Tecnology JC. Quiero realizar este pedido:',
        '',
        ...lineas,
        '',
        `Total estimado: $${total.toLocaleString('es-CO')}`,
        '',
        '¿Me confirman disponibilidad y opciones de entrega?'
    ].join('\n');

    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(mensaje)}`, '_blank', 'noopener');
}

const menuToggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('.main-nav');

if (menuToggle && menu) {
    menuToggle.addEventListener('click', () => {
        const isOpen = menu.classList.toggle('activo');
        menuToggle.setAttribute('aria-expanded', String(isOpen));
    });
}

const navLinks = document.querySelectorAll('.main-nav a');
navLinks.forEach(link => {
    link.addEventListener('click', function (event) {
        const targetId = this.getAttribute('href');
        if (!targetId || !targetId.startsWith('#')) return;

        event.preventDefault();
        const targetSection = document.querySelector(targetId);

        if (targetSection) {
            window.scrollTo({
                top: targetSection.offsetTop - 76,
                behavior: 'smooth'
            });
        }

        if (menu && menu.classList.contains('activo')) {
            menu.classList.remove('activo');
            if (menuToggle) {
                menuToggle.setAttribute('aria-expanded', 'false');
            }
        }

        navLinks.forEach(item => item.classList.remove('active'));
        this.classList.add('active');
    });
});

document.querySelectorAll('.filtro-btn').forEach(boton => {
    boton.addEventListener('click', () => {
        document.querySelectorAll('.filtro-btn').forEach(item => item.classList.remove('activo'));
        boton.classList.add('activo');
        cargarProductos(boton.getAttribute('data-filtro'));
    });
});

document.querySelector('.cart-toggle')?.addEventListener('click', abrirCarrito);
document.querySelector('.cart-close')?.addEventListener('click', cerrarCarrito);
document.querySelector('.cart-overlay')?.addEventListener('click', cerrarCarrito);
document.querySelector('.whatsapp-checkout')?.addEventListener('click', enviarPedidoPorWhatsApp);
document.querySelector('.cart-clear')?.addEventListener('click', () => {
    carrito = [];
    guardarCarrito();
    actualizarCarrito();
});
document.querySelector('.cart-items')?.addEventListener('click', event => {
    const button = event.target.closest('button[data-action]');
    if (!button) return;

    const id = Number(button.dataset.id);
    const item = carrito.find(entry => entry.id === id);
    if (!item) return;

    if (button.dataset.action === 'increase') item.cantidad += 1;
    if (button.dataset.action === 'decrease') item.cantidad -= 1;
    if (button.dataset.action === 'remove' || item.cantidad <= 0) {
        carrito = carrito.filter(entry => entry.id !== id);
    }
    guardarCarrito();
    actualizarCarrito();
});

document.addEventListener('DOMContentLoaded', () => {
    cargarProductos();
    actualizarCarrito();
});
