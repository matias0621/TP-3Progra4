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
    productos : [
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
    vender: function(idProducto, cantidad){
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





