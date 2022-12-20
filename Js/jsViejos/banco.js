/* Ejercicio Pre Entrega .- Banco CoderJaus*/

//Clase Cliente

class Clientes {
    constructor(nombre, apellido, dni, saldo) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.dni = dni;
        this.saldo = saldo;
    }
}

const clienteSamuel = new Clientes("Samuel", "Tocaimaza", 12345678, 1000);
const clienteJuan = new Clientes("Juan", "Perez", 87654321, 2000);
const clienteMaria = new Clientes("Maria", "Gomez", 12345678, 3000);
const clientePedro = new Clientes("Pedro", "Gonzalez", 12345678, 4000);

const arrayClientes = [];

arrayClientes.push(clienteSamuel);
arrayClientes.push(clienteJuan);
arrayClientes.push(clienteMaria);
arrayClientes.push(clientePedro);

console.log(arrayClientes);

//Función con el menú de opciones:

function menu() {
    alert("Bienvenido al Banco CoderJaus");
    let opcion = parseInt(prompt("Ingrese una opción: \n 1) Alta de cliente \n 2) Baja de cliente \n 3) Modificación de cliente \n 4) Consulta de cliente \n 5) Salir"));
    return opcion;
}

//Función para dar de alta un cliente:

function altaCliente() {
    let nombre = prompt("Ingrese el nombre del cliente: ");
    let apellido = prompt("Ingrese el apellido del cliente: ");
    let dni = parseInt(prompt("Ingrese el DNI del cliente: "));
    let saldo = parseInt(prompt("Ingrese el saldo del cliente: "));
    let cliente = new Clientes(nombre, apellido, dni, saldo);
    arrayClientes.push(cliente);
    console.log(arrayClientes);
}

//Función para dar de baja un cliente:

function bajaCliente() {
    let dni = parseInt(prompt("Ingrese el DNI del cliente: "));
    let cliente = arrayClientes.find(cliente => cliente.dni === dni);
    let indice = arrayClientes.indexOf(cliente);
    arrayClientes.splice(indice, 1);
    console.log(arrayClientes);
}

//Función para modificar un cliente:

function modificacionCliente() {
    let dni = parseInt(prompt("Ingrese el DNI del cliente: "));
    let cliente = arrayClientes.find(cliente => cliente.dni === dni);
    let indice = arrayClientes.indexOf(cliente);
    let nombre = prompt("Ingrese el nombre del cliente: ");
    let apellido = prompt("Ingrese el apellido del cliente: ");
    let saldo = parseInt(prompt("Ingrese el saldo del cliente: "));
    let clienteModificado = new Clientes(nombre, apellido, dni, saldo);
    arrayClientes.splice(indice, 1, clienteModificado);
    console.log(arrayClientes);
}











//Función para consultar un cliente:

function consultaCliente() {
    let dni = parseInt(prompt("Ingrese el DNI del cliente: "));
    let cliente = arrayClientes.find(cliente => cliente.dni === dni);
    console.log(cliente);
}


//Función para salir del programa:

function salir() {
    alert("Gracias por utilizar el Banco CoderJaus");
}

//Ejecuto el el programa:

let opcion = menu();
switch (opcion) {
    case 1:
        altaCliente();
        break;
    case 2:
        bajaCliente();
        break;
    case 3:
        modificacionCliente();
        break;
    case 4:
        consultaCliente();
        break;
    case 5:
        salir();
        break;
    default:
        alert("Opción incorrecta, rata!");
        break;
}





