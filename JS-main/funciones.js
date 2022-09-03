let pregunta;
let contador = 0;

while (pregunta != 2) {

    let resultado = parseInt(prompt("Ingrese el número del producto que desee adquirir: \n 1.-Guitarra \n 2.-Bajo \n 3.-Bateria"));

    if (resultado == 1) {
        contador= contador + 5000;
    }

    else if (resultado == 2) {
        contador = contador + 4500;
    }

    else if (resultado == 3) {
        contador = contador + 5500;
    }

    pregunta = parseInt(prompt("¿Desea seguir haciendo compras? \n 1.-Si \n 2.- No"));
}

alert("¡Gracias por su compra! \n El total de su compra es de $" + contador);
