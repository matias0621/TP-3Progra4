// ----------------- Ejercicio 1 -------------------------------- //
let productos = [
    {
        id: 1,
        nombre: "Lechuga",
        precio: 3.99,
        stock: 5
    },
    {
        id: 2,
        nombre: "Oreos",
        precio: 8.50,
        stock: 7
    },
    {
        id: 3,
        nombre: "Pitusas",
        precio: 5.99,
        stock: 17
    },
    {
        id: 4,
        nombre: "Pollo",
        precio: 9.99,
        stock: 20
    },
    {
        id: 5,
        nombre: "Cebolla",
        precio: 3.99,
        stock: 10
    }
]

let nuevoProducto = {
    id: 6,
    nombre: "Chocolate",
    precio: 4.10,
    stock: 30
}

productos.push(nuevoProducto)
console.log("Lista con el nuevo producto")
console.log(productos)
productos.pop()
console.log("Lista con el ultimo producto eliminado")
console.log(productos)

// ----------------- Ejercicio 2 -------------------------------- //
let productosEnStock = productos.filter(function (producto) {
    return producto.stock > 10
})

console.log("Productos en stock: ")
console.log(productosEnStock)


// ----------------- Ejercicio 3 -------------------------------- //
let productoEncontrado = null

function buscarArreglo(nombre) {
    return productos.find((productoNombre) => productoNombre.nombre == nombre)
}

function mostrarNombreBuscado(callback, nombre) {
    const productoEncontrado = callback(nombre)
    if (productoEncontrado) {
        console.log(`Producto encontrado: ${productoEncontrado.nombre}`)
    }
    else {
        console.log("No se encontro el producto")
    }
}

mostrarNombreBuscado(buscarArreglo, "Pitusas")


// ----------------- Ejercicio 4 -------------------------------- //
let totalDeLosProductos =
    productos.reduce((acumulador, product) => acumulador + product.precio, 0)

const promedio = function () {
    return totalDeLosProductos / productos.length
}

console.log(`El total de los productos es: ${totalDeLosProductos} \n El promedio es de: ${promedio()}`)

// ----------------- Ejercicio 5 -------------------------------- //

function verificarStocks() {
    let hayProductosSinStock = productos.some(p => p.stock <= 0)
    let todosLosProductosSalen100 = productos.every(p => p.stock >= 100)

    if (hayProductosSinStock) {
        console.log("Hay que reponer productos")
        console.log(productos)
    }
    else {
        console.log("Todos los productos tiene stock todavia")
    }

    if (!todosLosProductosSalen100) {
        console.log("Hay que bajar algunos precios")
        console.log(productos)
    }
    else {
        console.log("No, estan bien")
    }
}

verificarStocks()

// ----------------- Ejercicio 6 -------------------------------- //
let clientes = [
    {
        id: 1,
        nombre: "Ana López",
        edad: 28,
        compras: ["Laptop", "Auriculares", "Mouse"]
    },
    {
        id: 2,
        nombre: "Carlos Pérez",
        edad: 35,
        compras: ["Teléfono", "Funda", "Cargador"]
    },
    {
        id: 3,
        nombre: "María Gómez",
        edad: 42,
        compras: ["Televisor", "Control remoto", "Baterías"]
    }
];

clientes.forEach((cliente) => {
    console.log("Nombre: " + cliente.nombre)
    console.log("Compras:" + cliente.compras)
})

// ----------------- Ejercicio 7 -------------------------------- //
function procesarClientes(lista_clientes, callback) {
    callback(lista_clientes)
}

function mostrarNombres(lista_clientes) {
    lista_clientes.forEach(c => console.log("Nombre: " + c.nombre))
}

function totalDeCompras(lista_clientes) {
    totalDeCompras = lista_clientes.reduce((acum, c) => acum + c.compras.length, 0)
    console.log("El total de compras es: " + totalDeCompras)
}

console.log("Mostrar nombres")
procesarClientes(clientes, mostrarNombres)
console.log("Total de compras")
procesarClientes(clientes, totalDeCompras)

// ----------------- Ejercicio 8 -------------------------------- //

let lista_numeros = [42, 7, 15, 89, 3, 27, 61, 10];

const ordenadoAscendentes = lista_numeros.sort()
console.log(ordenadoAscendentes)

const ordenadoDescendentes = lista_numeros.sort((a, b) => b - a)
console.log(ordenadoDescendentes)

// ----------------- Ejercicio 9 -------------------------------- //
let productoVendibles = {
    productos: [
        {
            id: 1,
            nombre: "Teclado Mecánico",
            stock: 15
        },
        {
            id: 2,
            nombre: "Mouse Inalámbrico",
            stock: 30
        },
        {
            id: 3,
            nombre: "Monitor 24 pulgadas",
            stock: 8
        },
        {
            id: 4,
            nombre: "Silla Gamer",
            stock: 5
        }
    ],
    vender: function (idProducto, cantidad) {
        let producto = productoVendibles.productos.find(p => p.id === idProducto)
        if (producto.stock < cantidad) {
            console.log("Stock insuficiente")
        }
        else {
            producto.stock -= cantidad
            console.log(productoVendibles.productos)
            console.log("Compra realizada")
        }
    }
}

productoVendibles.vender(4, 8)

// ----------------- Ejercicio 10 -------------------------------- //

let carrito = []
const productosEjercicio10 = [
    { producto: "Teclado mecánico", cantidad: 2, precioUnitario: 45000 },
    { producto: "Mouse gamer", cantidad: 1, precioUnitario: 38000 },
    { producto: "Pad mouse XL", cantidad: 3, precioUnitario: 12000 },
    { producto: "Auriculares inalámbricos", cantidad: 4, precioUnitario: 52000 },
    { producto: "Monitor 27''", cantidad: 1, precioUnitario: 210000 },
    { producto: "Silla gamer", cantidad: 2, precioUnitario: 150000 },
    { producto: "Parlantes bluetooth", cantidad: 5, precioUnitario: 30000 },
    { producto: "Webcam HD", cantidad: 2, precioUnitario: 25000 },
    { producto: "Disco SSD 1TB", cantidad: 3, precioUnitario: 95000 },
    { producto: "Placa de video RTX 4070", cantidad: 1, precioUnitario: 820000 }
];

function agregarObjetoCarrito(producto) {
    carrito.push(producto)
}

function calcularTotalProducto() {
    let total = carrito.reduce((acc, producto) => acc + producto.precioUnitario * producto.cantidad, 0)
    return total
}

function detalleCompra() {
    return carrito.map((producto) => `Producto: ${producto.producto} - Cantidad: ${producto.cantidad} - Subtotal: ${producto.precioUnitario * producto.cantidad}`)
}
agregarObjetoCarrito(productosEjercicio10[2])
agregarObjetoCarrito(productosEjercicio10[1])
agregarObjetoCarrito(productosEjercicio10[4])
agregarObjetoCarrito(productosEjercicio10[8])
agregarObjetoCarrito(productosEjercicio10[5])
console.log(carrito)

console.log("Detalle de compra: " + detalleCompra())
console.log("Total de compra: " + calcularTotalProducto())

// ----------------- Ejercicio 11 -------------------------------- //
let libros = [
    { id: 1, titulo: "Cien años de soledad", autor: "Gabriel García Márquez", genero: "Realismo mágico", disponible: true },
    { id: 2, titulo: "1984", autor: "George Orwell", genero: "Distopía", disponible: false },
    { id: 3, titulo: "Don Quijote de la Mancha", autor: "Miguel de Cervantes", genero: "Clásico", disponible: true },
    { id: 4, titulo: "El Hobbit", autor: "J.R.R. Tolkien", genero: "Fantasía", disponible: true },
    { id: 5, titulo: "Fahrenheit 451", autor: "Ray Bradbury", genero: "Ciencia ficción", disponible: false },
    { id: 6, titulo: "Orgullo y prejuicio", autor: "Jane Austen", genero: "Romance", disponible: true },
    { id: 7, titulo: "La sombra del viento", autor: "Carlos Ruiz Zafón", genero: "Misterio", disponible: true },
    { id: 8, titulo: "Crónica de una muerte anunciada", autor: "Gabriel García Márquez", genero: "Novela", disponible: false },
    { id: 9, titulo: "Los juegos del hambre", autor: "Suzanne Collins", genero: "Distopía", disponible: true },
    { id: 10, titulo: "It", autor: "Stephen King", genero: "Terror", disponible: true }
];

function obtenerGenero(genero) {
    return libros.filter((libro) => libro.genero === genero)
}

function arregloDeLibroEnMayuscula() {
    return libros.map((libro) => libro.titulo.toUpperCase())
}

function prestarLibro(libroId) {
    let libroEncontrado = libros.find(libro => libro.id === libroId && libro.disponible)
    if (libroEncontrado === undefined) {
        console.log("No disponible")
    }
    else {
        console.log("Prestado")
        libroEncontrado.disponible = false
    }
}

console.log(obtenerGenero("Distopía"))
console.log(arregloDeLibroEnMayuscula())
prestarLibro(1)
prestarLibro(2)

// ----------------- Ejercicio 12 -------------------------------- //
let agenda = {
    contactos: [
        { id: 1, nombre: "Ana Pérez", telefono: "1123456789" },
        { id: 2, nombre: "Juan López", telefono: "1134567890" },
        { id: 3, nombre: "María García", telefono: "1145678901" },
        { id: 4, nombre: "Carlos Díaz", telefono: "1156789012" },
        { id: 5, nombre: "Lucía Fernández", telefono: "1167890123" }
    ]
};

function agregarContacto(contacto) {
    agenda.contactos.push(contacto)
}

function eliminarContacto(id) {
    agenda.contactos = agenda.contactos.filter(contacto => contacto.id != id)
}

function buscarContactoPorNombre(nombre) {
    return agenda.contactos.find(contacto => contacto.nombre === nombre)
}

function mostrarContactos() {
    console.log(agenda.contactos)
}

agregarContacto({ id: 6, nombre: "Marcos Fernández", telefono: "9876543210" })

mostrarContactos()
eliminarContacto(4)
mostrarContactos()

// ----------------- Ejercicio 13 -------------------------------- //

const alumnos = [
    { id: 1, nombre: "Ana Pérez", notas: [8, 9, 7, 10] },
    { id: 2, nombre: "Juan López", notas: [6, 5, 7, 8] },
    { id: 3, nombre: "María García", notas: [9, 9, 10, 8] },
    { id: 4, nombre: "Carlos Díaz", notas: [4, 6, 5, 7] },
    { id: 5, nombre: "Lucía Fernández", notas: [10, 10, 9, 9] }
];

function promedioDeLosAlumnos() {
    let promedios = alumnos.map(alumno => {
        let suma = alumno.notas.reduce((acc, nota) => acc + nota, 0);
        let promedio = suma / alumno.notas.length;

        return {
            id: alumno.id,
            nombre: alumno.nombre,
            promedio: promedio
        };
    });
    return promedios
}

function alumnosAprobados(promedios) {
    let alumnos = promedios.map(alumnos => {
        if (alumnos.promedio >= 6) return alumnos
    })
    return alumnos
}

function mostrarAlumnos(alumnos){
    console.log(alumnos)
}

let promedioAlumnos = promedioDeLosAlumnos()
mostrarAlumnos(promedioAlumnos)
let alumnosAprobadosLista = alumnosAprobados(promedioAlumnos)
mostrarAlumnos(alumnosAprobadosLista)

// ----------------- Ejercicio 14 -------------------------------- //

let productosEjercicio14 = [
  { id: 1, nombre: "Laptop Gamer", precio: 1200, stock: 10 },
  { id: 2, nombre: "Auriculares Inalámbricos", precio: 80, stock: 35 },
  { id: 3, nombre: "Mouse Gamer", precio: 45, stock: 50 },
  { id: 4, nombre: "Teclado Mecánico", precio: 100, stock: 20 },
  { id: 5, nombre: "Monitor 24''", precio: 250, stock: 15 }
];

function comprar(id, cantidad, callbackExito, callbackError){
    let producto = productosEjercicio14.find(p => p.id === id)

    if (producto === undefined){
        return callbackError("Producto no encontrado")
    }

    if (producto.stock < cantidad){
        return callbackError("Stock insuficiente")
    }

    producto.stock -= cantidad
    callbackExito(`Compra efectuada: ${producto.nombre} - ${producto.stock} - ${producto.precio * cantidad}`)
}

function callbackExitoso(msg){
    console.log(msg)
}

function callbackDeFracaso(msg){
    console.log(msg)
}

comprar(1, 4, callbackExitoso, callbackDeFracaso)
comprar(2, 10000, callbackExitoso, callbackDeFracaso)


// ----------------- Ejercicio 14 -------------------------------- //

function aplicarDescuento(id, porcentaje, callbackExito, callbackError){
    let producto = productosEjercicio14.find(p => p.id === id)

    if (producto === undefined){
        return callbackError("Producto no encontrado")
    }

    if (porcentaje < 0 || porcentaje > 100){
        return callbackError("Descuento invalido")
    }

    producto.precio = producto.precio * (porcentaje/100)
    callbackExito(`Descuento exitoso: ${producto.nombre} - ${producto.precio}$`)
    
}

aplicarDescuento(1, 30, callbackExitoso, callbackDeFracaso)
aplicarDescuento(123, 30, callbackExitoso, callbackDeFracaso)
aplicarDescuento(1, 3000, callbackExitoso, callbackDeFracaso)

// ----------------- Ejercicio 14 -------------------------------- //

function filtrarPorStock(minStock, callbackExito, callbackError){
    let productosFiltrado = productosEjercicio14.filter(p => p.stock >= minStock)
    if (productosFiltrado.length === 0){
        return callbackError("No hay productos con ese stock")
    }

    callbackExito(productosFiltrado)
}

filtrarPorStock(50, callbackExitoso, callbackDeFracaso)
filtrarPorStock(50000, callbackExitoso, callbackDeFracaso)





