// Datos de productos (simulando una base de datos)
const productos = [
    {
        id: 1,
        nombre: "Funda Silicona iPhone 14",
        categoria: "fundas",
        descripcion: "Funda de silicona suave con interior de microfibra",
        imagen: "img/productos/Funda_Silicona_iPhone_14.jpeg"
    },
    {
        id: 2,
        nombre: "Protector Pantalla Samsung S23",
        categoria: "protectores",
        descripcion: "Cristal templado 9H antirayones y antihuellas",
        imagen: "img/productos/Protector_Pantalla_Samsung_S23.jpeg"
    },
    {
        id: 3,
        nombre: "Cargador USB-C 25W",
        categoria: "cargadores",
        descripcion: "Cargador rápido compatible con múltiples dispositivos",
        imagen: "img/productos/Cargador_USBC_25W.jpeg"
    },
    {
        id: 4,
        nombre: "Audífonos Bluetooth",
        categoria: "audifonos",
        descripcion: "Audífonos inalámbricos con cancelación de ruido",
        imagen: "img/productos/Audífonos_Bluetooth.jpeg"
    },
    {
        id: 5,
        nombre: "Soporte para Auto",
        categoria: "soportes",
        descripcion: "Soporte magnético para tablero o rejilla de ventilación",
        imagen: "img/productos/Soporte_para_Auto.jpeg"
    },
    {
        id: 6,
        nombre: "Funda Antigolpes Xiaomi",
        categoria: "fundas",
        descripcion: "Funda resistente con protección en esquinas",
        imagen: "img/productos/Funda_Antigolpes_Xiaomi.jpeg"
    },
    {
        id: 7,
        nombre: "Cable USB-C 2m",
        categoria: "cargadores",
        descripcion: "Cable de carga rápida reforzado con nylon",
        imagen: "img/productos/Cable_USBC_2m.jpeg"
    },
    {
        id: 8,
        nombre: "Protector Cámara iPhone",
        categoria: "protectores",
        descripcion: "Protector de cristal para lentes de cámara",
        imagen: "img/productos/Protector_Camara_iPhone.jpeg"
    },
        {
        id: 9,
        nombre: "Adapatdor 35w",
        categoria: "cargadores",
        descripcion: "Adaptador 35w carga rapida",
        imagen: "img/productos/adapatador_35w.jpg"
    },
        {
        id: 10,
        nombre: "Adapatador Samsung",
        categoria: "cargadores",
        descripcion: "Adapatador para telefono Samsung",
        imagen: "img/productos/adapatador_samsung.jpg"
    },
        {
        id: 11,
        nombre: "Airpod Pro",
        categoria: "Audifono",
        descripcion: "Estuche Airpod Pro",
        imagen: "img/productos/airpod_pro.jpg"
    },
    {
        id: 12,
        nombre: "Funda iPhone 14",
        categoria: "fundas",
        descripcion: "Funda de silicona suave con interior de microfibra",
        imagen: "img/productos/funda_iphone_14.jpg"
    },
    {
        id: 13,
        nombre: "Funda iPhone 15",
        categoria: "fundas",
        descripcion: "Funda de silicona suave con interior de microfibra",
        imagen: "img/productos/Funda_Silicona_iPhone.jpg"
    },
    {
        id: 14,
        nombre: "Funda iPhone 16",
        categoria: "fundas",
        descripcion: "Funda de silicona suave con interior de microfibra",
        imagen: "img/productos/funda_iphone2.jpg"
    },
    {
        id: 15,
        nombre: "Funda iPhone 16",
        categoria: "fundas",
        descripcion: "Funda de silicona suave con interior de microfibra",
        imagen: "img/productos/funda_iphone.jpg"
    },
    {
        id: 16,
        nombre: "Airpod serie 4",
        categoria: "audifonos",
        descripcion: "Audífonos inalámbricos con cancelación de ruido",
        imagen: "img/productos/airpods_serie4.jpg"
    },
    {
        id: 17,
        nombre: "Airpods",
        categoria: "audifonos",
        descripcion: "Audífonos inalámbricos con cancelación de ruido",
        imagen: "img/productos/airpods.jpg"
    },
    {
        id: 18,
        nombre: "Audifonos Inalambricos",
        categoria: "audifonos",
        descripcion: "Audífonos inalámbricos con cancelación de ruido",
        imagen: "img/productos/Audifonos_Bluetooth.jpg"
    },
    {
        id: 19,
        nombre: "Audifonos Inalambricos 2",
        categoria: "audifonos",
        descripcion: "Audífonos inalámbricos con cancelación de ruido",
        imagen: "img/productos/audifonos_i12.jpg"
    },
    {
        id: 20,
        nombre: "Armadura",
        categoria: "fundas",
        descripcion: "Funda resistente con protección en esquinas",
        imagen: "img/productos/armadura.jpg"
    },
    {
        id: 21,
        nombre: "bateria Iphone",
        categoria: "cargadores",
        descripcion: "Batería externa para iPhone con carga rápida",   
        imagen: "img/productos/batria_iphon.jpg"
    }

];

// Cargar productos en la página
function cargarProductos(filtro = 'todos') {
    const contenedor = document.getElementById('productos-container');
    contenedor.innerHTML = '';
    
    let productosFiltrados = productos;
    
    if (filtro !== 'todos') {
        productosFiltrados = productos.filter(producto => producto.categoria === filtro);
    }
    
    productosFiltrados.forEach(producto => {
        const productoElement = document.createElement('div');
        productoElement.className = 'producto';
        productoElement.innerHTML = `
            <img src="${producto.imagen}" alt="${producto.nombre}" class="producto-img">
            <div class="producto-info">
                <div class="producto-categoria">${producto.categoria}</div>
                <h3 class="producto-nombre">${producto.nombre}</h3>
                <p class="producto-descripcion">${producto.descripcion}</p>
                <button class="btn-comprar" data-id="${producto.id}">Añadir al carrito</button>
            </div>
        `;
        contenedor.appendChild(productoElement);
    });
    
    // Añadir event listeners a los botones de compra
    document.querySelectorAll('.btn-comprar').forEach(boton => {
        boton.addEventListener('click', (e) => {
            const productoId = e.target.getAttribute('data-id');
            agregarAlCarrito(productoId);
        });
    });
}

// Simular la funcionalidad de agregar al carrito
function agregarAlCarrito(productoId) {
    const producto = productos.find(p => p.id == productoId);
    if (producto) {
        alert(`¡${producto.nombre} añadido al carrito!`);
        // Aquí iría la lógica real para añadir al carrito
    }
}

// Manejar los filtros
document.querySelectorAll('.filtro-btn').forEach(boton => {
    boton.addEventListener('click', () => {
        // Quitar clase activo de todos los botones
        document.querySelectorAll('.filtro-btn').forEach(b => {
            b.classList.remove('activo');
        });
        
        // Añadir clase activo al botón clickeado
        boton.classList.add('activo');
        
        // Filtrar productos
        const filtro = boton.getAttribute('data-filtro');
        cargarProductos(filtro);
    });
});

// Menú móvil
document.querySelector('.menu-toggle').addEventListener('click', () => {
    document.querySelector('nav').classList.toggle('activo');
});

// Navegación suave al hacer clic en enlaces del menú
document.querySelectorAll('nav a').forEach(enlace => {
    enlace.addEventListener('click', function(e) {
        const seccionId = this.getAttribute('href');
        
        // Solo aplicar para enlaces internos
        if (seccionId.startsWith('#')) {
            e.preventDefault();
            
            const seccion = document.querySelector(seccionId);
            if (seccion) {
                window.scrollTo({
                    top: seccion.offsetTop - 70, // Ajuste para el header fijo
                    behavior: 'smooth'
                });
            }
            
            // Cerrar menú móvil si está abierto
            if (document.querySelector('nav').classList.contains('activo')) {
                document.querySelector('nav').classList.remove('activo');
            }
        }
    });
});

// Cargar todos los productos al iniciar
document.addEventListener('DOMContentLoaded', () => {
    cargarProductos();
});