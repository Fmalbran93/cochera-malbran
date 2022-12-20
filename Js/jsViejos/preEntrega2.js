comprar = true;
continuar = true;
decision = true;
let id = 0



class Productos {
    constructor(id, nombre, tipo, precio){
        this.id = id;
        this.nombre = nombre;
        this.tipo = tipo;
        this.precio = precio
    }
}
    

const producto1 = new Productos (1, "Hamburguesa Cheese Burger", "simple", 1100 )
const producto2 = new Productos (2, "Hamburguesa Yankie", "completa", 1800 )
const producto3 = new Productos (3, "Papas Fritas", "simple", 550 )
const producto4 = new Productos (4, "Papas c/cheddar", "completa", 800 )
const producto5 = new Productos (5, "Pizza Margarita", "simple", 1500)
const producto6 = new Productos (6, "Pizza Especial", "completa", 1800)

let arrayProductos = [];

arrayProductos.push(producto1);
arrayProductos.push(producto2);
arrayProductos.push(producto3);
arrayProductos.push(producto4);
arrayProductos.push(producto5);
arrayProductos.push(producto6);

console.log(arrayProductos);

function pregunta() {
  alert("Bienvenido a la Configuracion de tu menu en PedidosCochera");
  let opcion = parseInt(prompt("Ingrese una opción: \n 1) Agregar Producto Nuevo \n 2) Quitar Producto \n 3) Modificación de Producto \n 4) Consultar productos \n 5) Salir"));
  return opcion;
}

/* pregunta(); */

//Función para Crear un nuevo producto:

function nuevoProducto() {
  let id = parseInt(prompt("Ingrese el Id del producto: "));
  let nombre = prompt("Ingrese el nombre del producto: ");
  let tipo = prompt("tipo de producto: ");
  let precio = parseInt(prompt("Ingrese el precio del producto: "));
  let Producto = new Productos(id, nombre, tipo, precio);
  arrayProductos.push(Producto);
  console.log(arrayProductos);
}

arrayProductos.forEach((producto) => {
  console.log(producto);
} )

//Función para dar Quitar producto:

function quitarProducto() {
  do{
     id = parseInt(prompt("Ingrese el Id del producto: "));
    if (id > 0 && id <= arrayProductos.length){
      arrayProductos = arrayProductos.filter(producto => producto.id !== id)
      console.log(arrayProductos);
      
    } else {
      alert("Ingrese un id valido! ")
    }

  } while (id <= 0 || id > arrayProductos.length)
}

//Función para modificar un producto:
/* 
function modificacionProducto() {
  let id = parseInt(prompt("Ingrese el id del producto: "));
  let Productos = arrayProductos.find(Productos => Productos.id === id);
  let indice = arrayProductos.indexOf(Productos);
  let nombre = prompt("Ingrese el nuevo nombre del producto: ");
  let tipo = prompt("tipo de producto: ");
  let precio = parseInt(prompt("Ingrese el nuevo precio del producto: "));
  let productoModificado = new Productos(id, nombre, tipo, precio);
  arrayProductos.splice(indice, 1, productoModificado);
  console.log(arrayProductos);
  console.log(productosModificado);
}
 */

function modificacionProducto (){
  let id = parseInt(prompt("ingrese el id del producto: "));
  arrayProductos.forEach((producto) => {
    if(producto.id == id){
      let nombre = prompt("Ingrese el nuevo nombre del producto: ");
      let tipo = prompt("tipo de producto: ");
      let precio = parseInt(prompt("Ingrese el nuevo precio del producto: "));

      producto.nombre = nombre
      producto.tipo = tipo
      producto.precio = precio
    }
  } )
  console.log(arrayProductos)
  }


//Función para consultar un producto:

function consultaProductos() {
  do{
    id = parseInt(prompt("Ingrese el Id del producto: "));
    if (id > 0 && id <= arrayProductos.length){
      let productos = arrayProductos.find(productos => productos.id === id);
      console.log(productos);
      
    } else {
      alert("Ingrese un id valido! ")
    }

  } while (id <= 0 || id > arrayProductos.length)
}

console.log();


/* const arrayProductoTipo = arrayProductos.filter(producto => producto.tipo === "completa");

console.log("Filter: ");
console.log(arrayProductoTipo);
*/

function opcionErronea() {
  producto = parseInt(prompt("Esa opcion no esta en el menu... Ingrese una opción correcta: \n 1) Agregar Producto Nuevo \n 2) Quitar Producto \n 3) Modificación de Producto \n 4) Consultar productos \n 5) Salir" ));
}

let opcion = pregunta();
switch (opcion) {
    case 1:
      nuevoProducto();
        break;
    case 2:
      quitarProducto();
        break;
    case 3:
        modificacionProducto();
        break;
    case 4:
        consultaProductos();
        break;
    case 5:
        salir();
        break;
    default:
      alert("Opción incorrecta, !");
      break;
}




/* let producto = Number( prompt(`Marca una de las siguientes opciones:\n ${productoUno.id}. ${productoUno.nombre} \n ${productoDos.id}. ${productoDos.nombre} \n ${productoTres.id}. ${productoTres.nombre} \n ${productoCuatro.id}. ${productoCuatro.nombre} \n ${productoCinco.id}. ${productoCinco.nombre} \n ${productoSeis.id}. ${productoSeis.nombre}`)); */