// Creo dos variables para guardar el total de la compra y la eleccion del producto

let total;
let eleccion;

// Creo las const con los precios

const hamburguesa = 980;
const papas = 750;
const pizza = 1180;


 // Alert de bienvenida
 alert("Bienvenido/a! Preparate para comprar!");


// Creo la funcion que va a realizar el calculo del total y mostrar el producto seleccionado

function comprar() {

  // Creo un ciclo que nos impida seguir con la ejecucion si no agregamos un numero entre 1 y 3
  do {
    eleccion = parseInt(
      prompt(`Seleccioná el producto que vas a comprar:
    
    1- Hamburguesa Cochera = $980.
    
    2- Papas Bravas = $750.
    
    3- Pizza Napolitana = $1180.
    `)
    );
  } while (eleccion !== 1 && eleccion !== 2 && eleccion !== 3);

  // Creo un condicional que nos de una respuesta segun la opcion elegida

  if (eleccion === 1) {
    total = hamburguesa;
    alert("Tenes que abonar: $" + total);
  } else if (eleccion === 2) {
    total = papas;
    alert("Tenes que abonar: $" + total);
  } else {
    total = pizza;
    alert("Tenes que abonar: $" + total);
  }

  // Creo otro ciclo que nos pregunte si queremos seguir comprando

  do {
    eleccion = parseInt(
      prompt(`Selecciona una opcion:
    1- Quiero seguir comprando.
    2- No quiero seguir comprando`)
    );
  } while (eleccion !== 1 && eleccion !== 2);
  if (eleccion === 1) {
    comprar();
  } else {
    alert("Gracias por comprar, vuelva pronto");
  }
}
comprar();