//Creo variables de eleccion
let HamburguesaSimple,
  HamburguesaCompleta,
  PapasFritas,
  PapasBravas,
  PapasCheddar,
  PizzaNapolitana,
  PizzaMargarita,
  PizzaEspecial,
  continuar,
  decision,
  producto,
  totalcompras;

//Creo constantes con los precios
HamburguesaSimple = 699;
HamburguesaCompleta = 900;
PapasFritas = 500
PapasCheddar = 600;
PizzaMargarita = 1100
PizzaEspecial = 1300
comprar = true;
continuar = true;
decision = true;
producto = 0;
totalcompras = 0;


//Creo Funcion para indicarnos la seleccion de los producto
function pregunta() {
  producto = Number(
    prompt(
      `Marca una de las siguientes opciones:\n1. Hamburguesa Simple - Precio $ ${HamburguesaSimple} \n2. Hamburguesa Completa - Precio $ ${HamburguesaCompleta} \n3. Papas Fritas - Precio $ ${PapasFritas} \n4. Papas Cheddar - Precio $ ${PapasCheddar} \n5. Pizza Margarita - Precio $ ${PizzaMargarita} \n6. Pizza Especial - Precio $ ${PizzaEspecial}`
    )
  );
}

pregunta();

// Creo funcion que nos arrojara un mensaje si la opcion es incorrecta 
function opcionErronea() {
  producto = Number(
    prompt(
      `Esa opcion no esta en el menu...\nMarque una de las siguientes opciones:\n1. Hamburguesa Simple - Precio $ ${HamburguesaSimple} \n2. Hamburguesa Completa - Precio $ ${HamburguesaCompleta} \n3. Papas Fritas - Precio $ ${PapasFritas} \n4. Papas Cheddar - Precio $ ${PapasCheddar} \n5. Pizza Margarita - Precio $ ${PizzaMargarita} \n6. Pizza Especial - Precio $ ${PizzaEspecial}`
    )
  );
}
 //Creo flujo while + Switch donde cada caso de compra se sumara en un total de compra
  while (comprar === true) {
    switch (producto) {
      case 1:
        totalcompras = totalcompras + HamburguesaSimple;
        break;
      case 2:
        totalcompras = totalcompras + HamburguesaCompleta;
        break;
      case 3:
        totalcompras = totalcompras + PapasFritas;
        break;
      case 4:
        totalcompras = totalcompras + PapasCheddar;
        break;
      case 5:
        totalcompras = totalcompras + PizzaMargarita;
        break;
      case 6:
        totalcompras = totalcompras + PizzaEspecial;
        break;
      default:
        opcionErronea();
        continue;
    }
    //Creo Condicion que nos pemitira seguir comprando segun confirmemos, al cancelar nos brindara el resultado de toda la compra
    decision = confirm(`Desea seguir comprando?`);
    if (decision === true) {
      comprar = decision;
      pregunta();
    } else {
      decision = false;
      comprar = decision;
      alert(
        `El total de su compra es $ ${totalcompras} . El repartidor entregara su pedido en un tiempo estimado de 45 Minutos. Gracias por su compra, Vuelva pronto`
      );
      break;
    }
  }



