/* Carrito de compras */


let carrito = [];

/* Cargar Carrito - LocalStorage */
if ( localStorage.getItem("carrito")){
    carrito = JSON.parse(localStorage.getItem("carrito"))
}

/* funcion mostrar productos */

const contenedorProductos = document.getElementById("contenedorProductos");

//Recorro el array

const mostrarProductos = () => {
    productos.forEach(producto => {
        const card = document.createElement("div");
        card.classList.add("col-xl-3", "col-md-6", "col-xs-12");
        card.innerHTML = `
                        <div class = "card">
                            <img src = "${producto.img}" class = "card-img-top imgProductos" alt = " ${producto.nombre}">
                            <div class ="card-body">
                                <h4> ${producto.nombre} </h5>
                                <span></span>
                                <p> $${producto.precio} </p>
                                <button class= "btn cta-btn" id = "botonAgregar${producto.id}" >Agregar al Carrito</button>
                            </div>
                        </div>`

        contenedorProductos.appendChild(card);

        //Agregar productos al carrito: 

        const botonAgregar = document.getElementById(`botonAgregar${producto.id}`);
        botonAgregar.addEventListener("click", () => {
            agregarAlCarrito(producto.id)

            
        })
    })
};
mostrarProductos();

console.log(productos);

//Funcion a boton agregar.

const agregarAlCarrito = (id) => {
    const productoEnCarrito = carrito.find(producto => producto.id === id);
    if(productoEnCarrito) {
        productoEnCarrito.cantidad++;
    } else { 
        producto = productos.find(producto => producto.id === id);
        carrito.push(producto);
        localStorage.setItem("carrito", JSON.stringify(carrito));
    }
    contadorCarrito();
    console.log(carrito);
    /* contadorCarrito(); */
}

//Mostrar carrito



const contenedorCarrito = document.getElementById("contenedorCarrito");

const verCarrito = document.getElementById("verCarrito");

verCarrito.addEventListener("click",  () => {
    mostrarCarrito();
})

//FUNCION PARA MOSTRAR CARRITO

const mostrarCarrito = () => {
    //limpiar
    contenedorCarrito.innerHTML = "";

    carrito.forEach(producto => {
        const card = document.createElement("div");
        card.classList.add("col-xl-3", "col-md-6", "col-xs-12");
        card.innerHTML = `
                        <div class = "card">
                            <img src = "${producto.img}" class = "card-img-top imgProductos" alt = " ${producto.nombre}">
                            <div class ="card-body">
                                <h5> ${producto.nombre} </h5>
                                <p> $${producto.precio} </p>
                                <p>Cantidad: ${producto.cantidad}</p>
                        <p>Total: $${producto.cantidad * producto.precio}</p>
                        <button class= "btn cta-btn" id = "eliminar${producto.id}" >Eliminar Producto</button>
                        <hr>
                        </div>
                    </div>`;

        contenedorCarrito.appendChild(card);

        //Eliminar productos del carrito:

        const boton = document.getElementById(`eliminar${producto.id}`);
        boton.addEventListener("click", () => {
            eliminarDelCarrito(producto.id);
            contadorCarrito();
            
        });
        
         

        
    });
    const total = carrito.reduce((acc, el) => acc + el.precio * el.cantidad, 0);
            
        const totalCompra = document.createElement("div")
        totalCompra.className = "total-contenido"
        totalCompra.innerHTML = `<h3> El total de tu compra es : ${total} $ </h3>`;
        contenedorCarrito.appendChild(totalCompra); 
}



//Funcion que elimina

const eliminarDelCarrito = (id) => {
    const producto = carrito.find( producto => producto.id === id);
    const indice = carrito.indexOf(producto);
    carrito.splice(indice, 1);

    mostrarCarrito();
    contadorCarrito();
    //localStorage: 
    localStorage.setItem("carrito", JSON.stringify(carrito));
}

//CONTADOR DEL CARRITO
const contadorCarrito = () => {
    cantidadCarrito.style.display = "block"
    cantidadCarrito.innerText = carrito.length;
}



//VACIAR TODO EL CARRITO DE COMPRAS: 

const vaciarCarrito = document.getElementById("vaciarCarrito");

vaciarCarrito.addEventListener("click", () => {
    eliminarTodoElCarrito();
    contadorCarrito();
})

const eliminarTodoElCarrito = () => {
    carrito = [];
    mostrarCarrito();
    contadorCarrito();

    //localStorage: 
    localStorage.clear();
}
