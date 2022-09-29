const inputNombre = document.getElementById("nombre");
const inputApellido = document.getElementById("apellido");
const inputMail = document.getElementById("email");
const inputPassword = document.getElementById("password");
const botonIngresar = document.getElementById("botonIngresar");
const divDatos = document.getElementById("DivDatos");
const DivBienvenida = document.getElementById("DivBienvenida");

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

botonIngresar.onclick = () => {
  const usuario = {
    nombre: inputNombre.value,
    apellido: inputApellido.value,
    email: inputMail.value,
    password: inputPassword.value,
  }
  localStorage.setItem('usuarioStorage', JSON.stringify(usuario))
  Swal.fire({
    title: 'Bienvenido a Bonehead, '+ JSON.stringify(usuario.nombre),
    showClass: {
      popup: 'animate__animated animate__fadeInDown'
    },
    hideClass: {
      popup: 'animate__animated animate__fadeOutUp'
    }
  })
}
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
  Toastify({
    text: "El artículo " + JSON.stringify(productoSeleccionado.Marca) + " Fue añadido a su carrito",
    duration: 3000,
    destination: "https://github.com/apvarun/toastify-js",
    newWindow: true,
    close: true,
    gravity: "top", // `top` or `bottom`
    position: "right", // `left`, `center` or `right`
    stopOnFocus: true, // Prevents dismissing of toast on hover
    style: {
      background: "linear-gradient(to right, #00b09b, #96c93d)",
    },
  }).showToast();
}

boton2.onclick = () => {
  console.log(carrito);
  let totalCompra = 0;
  carrito.forEach((prod) => {
    totalCompra = totalCompra + prod.Precio;
  })
  Swal.fire( `El Precio total a pagar es de: $${totalCompra}`);
}
