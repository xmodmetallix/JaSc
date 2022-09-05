let pregunta;
let contador = 0;

let Guitarras = [
    { Marca: "Gibson", Precio: "$25,000", Modelo: "Les Paul", Descripcion: "Madera de cedro" },
    { Marca: "ESP", Precio: "$30,000", Modelo: "Explorer", Descripcion: "Color negro" },
    { Marca: "Fender", Precio: "$15,000", Modelo: "Stratocaster", Descripcion: "Floyd Rose" },
    { Marca: "BC Rich", Precio: "$50,000", Modelo: "Warlock", Descripcion: "Colaboracion Stranger Things" }
];

let Baterias = [
    { Marca: "Tama", Precio: "$35,000", Modelo: "Club Jam", Descripcion: "Color rojo" },
    { Marca: "Tama", Precio: "$20,000", Modelo: "Cocktail Jam", Descripcion: "Sin platillos" },
    { Marca: "Tama", Precio: "$45,000", Modelo: "Rhythm Mate", Descripcion: "Color negro" },
    { Marca: "Tama", Precio: "$40,000", Modelo: "Imperialstar", Descripcion: "Madera de encino" }
];

let Bajos = [
    { Marca: "Fender", Precio: "$15,500", Modelo: "Squier", Descripcion: "Madera de pino" },
    { Marca: "Gibson", Precio: "$20,800", Modelo: "Tidepool", Descripcion: "5 cuerdas" },
    { Marca: "Fender", Precio: "$15,200", Modelo: "Squier", Descripcion: "Color blanco" },
    { Marca: "Fender", Precio: "$23,500", Modelo: "Squier", Descripcion: "Color blanco, 5 cuerdas" }
];

while (pregunta != 2) {

    let resultado = parseInt(prompt("Ingrese el número del producto que desee adquirir: \n 1.-Guitarra \n 2.-Bajo \n 3.-Bateria"));

    if (resultado == 1) {
        contador = contador + 5000;
        Guitarras.forEach(Guit=> console.log(Guit.Marca +" "+ Guit.Modelo))
    }

    else if (resultado == 2) {
        contador = contador + 4500;
        Bajos.forEach(Baj=> console.log(Baj.Marca +" "+ Baj.Modelo))
    }

    else if (resultado == 3) {
        contador = contador + 5500;
        Baterias.forEach(Bat=> console.log(Bat.Marca +" "+ Bat.Modelo))
    }

    pregunta = parseInt(prompt("¿Desea seguir haciendo compras? \n 1.-Si \n 2.- No"));
}

alert("¡Gracias por su compra! \n El total de su compra es de $" + contador);


