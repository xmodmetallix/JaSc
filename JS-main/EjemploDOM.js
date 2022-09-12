let productos = [];

const selectTag = document.getElementById('lista');

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

productos.forEach((producto) => {
  const option = document.createElement('option');
  option.innerText = `${producto.Marca}, ${producto.Modelo}: $${producto.Precio}`;
  selectTag.append(option);
})

//EVENTOS

let carrito = [];

const boton = document.createElement('button');
boton.innerText = 'Añadir al carrito';
document.body.append(boton);

const boton2 = document.createElement('button');
boton2.innerText = 'Finalizar compra';
document.body.append(boton2);

boton.onclick = () => {
  const productoSeleccionado = productos[selectTag.selectedIndex];
  carrito.push(productoSeleccionado);
}

boton2.onclick = () => {
  console.log(carrito);
  let totalCompra = 0;
  carrito.forEach((prod) => {
    totalCompra = totalCompra + prod.Precio;
  })

  const p = document.createElement('p');
  p.innerText = `El Precio total a pagar es de : $${totalCompra}`;
  document.body.append(p);
}

