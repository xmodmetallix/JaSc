let totalCompra = 0;
let productoSeleccionado = parseInt(prompt("Ingrese el número del producto que desee adquirir: \n 1.-Guitarra \n 2.-Bajo \n 3.-Bateria"));
let seguirComprando = true;
let decision;
let productos = [];
let carrito = [];

const Guitarra = {
    Marca: "Gibson",
    Precio: 25000,
    Modelo: "Les Paul",
    Descripcion: "Madera de cedro"
}
productos.push(Guitarra);

const Bajo = {
    Marca: "Fender",
    Precio: 15500,
    Modelo: "Squier",
    Descripcion: "Madera de pino"
}
productos.push(Bajo);

const Bateria = {
    Marca: "Tama",
    Precio: 35000,
    Modelo: "Club Jam",
    Descripcion: "Color rojo"
}
productos.push(Bateria);

console.log(productos);

while (seguirComprando === true) {
    if (productoSeleccionado === 1) {
        carrito.push(productos[0]);
    } else if (productoSeleccionado === 2) {
        carrito.push(productos[1]);
    } else if (productoSeleccionado === 3) {
        carrito.push(productos[2]);
    } else if (productoSeleccionado === 4) {
        carrito.push(productos[3]);
        productoSeleccionado = parseInt(prompt("Ingrese el número del producto que desee adquirir: \n 1.-Guitarra \n 2.-Bajo \n 3.-Bateria"));
        continue;
    }

    decision = parseInt(prompt("¿Desea seguir haciendo compras? \n 1.-Si \n 2.- No"));
    if (decision === 1) {
        productoSeleccionado = parseInt(prompt("Ingrese el número del producto que desee adquirir: \n 1.-Guitarra \n 2.-Bajo \n 3.-Bateria"));
    } else if (decision === 2) {
        seguirComprando = false;
    }
}

console.log(carrito);

for (let i = 0; i < carrito.length; i++) {
    totalCompra = totalCompra + carrito[i].Precio
}

for (const prod of carrito) {
    totalCompra = totalCompra + prod.Precio
}


alert("¡Gracias por su compra! \n El total de su compra es de $" + totalCompra);
