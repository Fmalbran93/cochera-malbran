const carritoContenedor = document.getElementById("carritoContenedor");
const cantidadCarrito = document.getElementById("cantidadCarrito");

let carrito = [];

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

        carritoContenedor.appendChild(card);

        //Agregar productos al carrito: 

        const botonAgregar = document.getElementById(`botonAgregar${producto.id}`);
        botonAgregar.addEventListener("click", () => {
            agregarAlCarrito(producto.id)
        })
    })
};

console.log(productos);

//Funcion a boton agregar.

const agregarAlCarrito = (id) => {
    const enCarrito = carrito.find(producto => producto.id === id);
    if(enCarrito) {
        enCarrito.cantidad++;
    } else { 
        producto = productos.find(producto => producto.id === id);
        carrito.push(producto);
    }
    console.log(carrito);
    contadorCarrito();
}





mostrarProductos();

//FUNCION PARA MOSTRAR CARRITO

const verCarrito = document.getElementById("verCarrito");
const modalContainer = document.getElementById("productosEnCarrito");


verCarrito.addEventListener("click", () =>{
    modalContainer.innerHTML = ""
    const modalHeader = document.createElement("div");
    modalHeader.className = "modal-header"
    modalHeader.innerHTML = `
            <h1 class = "modal-header-titulo">Carrito.</h1>
            `;
            productosEnCarrito.appendChild(modalHeader);

            const modalbutton = document.createElement("button");
            modalbutton.innerText = "x";
            modalbutton.className = "modal-header-button";

            modalHeader.appendChild(modalbutton);

            carrito.forEach((producto) => {
               
                
                let carritoContent =document.createElement("div")
                carritoContent.classList.add("col-xl-3", "col-md-6", "col-xs-12");
                carritoContent.innerHTML =`
                    <img src = "${producto.img}" class = "card-img-top imgProductos" alt = " ${producto.nombre}">
                    <div class ="card">
                        <h4> ${producto.nombre} </h5>
                        <p> $${producto.precio} </p>
                        <p>Cantidad: ${producto.cantidad}</p>
                        <p>Total: ${producto.cantidad * producto.precio}</p>
                        <button class= "btn cta-btn" id = "eliminar${producto.id}" >Eliminar Producto</button>
                        </div>
                    </div>`;

                        modalContainer.appendChild(carritoContent);

                        //ELIMINAR DEL CARRITO
                        const boton = document.getElementById(`eliminar${producto.id}`)
                        boton.addEventListener("click", () => {
                            eliminarDelCarrito(producto.id);
                        })
                        


            });
                    
            const total = carrito.reduce((acc, el) => acc + el.precio * el.cantidad, 0);
            
            const totalCompra = document.createElement("div")
            totalCompra.className = "total-contenido"
            totalCompra.innerHTML = `<h3> El total de tu compra es : ${total} $ </h3>`;
            modalContainer.appendChild(totalCompra);

});




//Funcion que elimina el producto del carrito

const eliminarDelCarrito = (id) => {
    const producto = carrito.find(producto => producto.id === id);
    const indice = carrito.indexOf(producto);
    carrito.splice(indice, 1);

   verCarrito();
}
    
const contadorCarrito = () => {
    cantidadCarrito.style.display = "block"
    cantidadCarrito.innerText = carrito.length;
}



//VACIAR CARRITO:

const vaciarCarrito = document.getElementById("vaciarCarrito");

vaciarCarrito.addEventListener("click", () => {
    eliminarTodoElCarrito();
})

const eliminarTodoElCarrito = () => {
    carrito = [];
    
}