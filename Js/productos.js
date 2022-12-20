
class Producto {
    constructor(id, nombre, precio, img) {
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.img = img;
        this.cantidad = 1; 
    }
}

const cheese = new Producto (1,"Cheese Burger", 1000, "../images/cheesse.jpg", );
const papas = new Producto (2,"Papas Fritas", 800, "../images/papasfritas1jpg.jpg", );
const pollocrispy = new Producto(3,"Pollo Crispy", 1200, "../images/pollocrispy.jpg", );
const pizza = new Producto (4, "Pizza Napo", 1500, "../images/pizza-menu.jpg", );

const productos = [cheese, papas, pollocrispy, pizza];







/* //FUNCION PARA MOSTRAR CARRITO

const pintarCarrito = () => {

    const modalBody = document.getElementById("bodyCarrito");
    modalBody.innerHTML = "";
    modalContainer.innerHTML = "";
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
                modalHeader.innerHTML =`
                    <img src = "${producto.img}" class = "card-img-top imgProductos" alt = " ${producto.nombre}">
                    <div class ="card">
                        <h4> ${producto.nombre} </h5>
                        <p> $${producto.precio} </p>
                        <p>Cantidad: ${producto.cantidad}</p>
                        <button class= "btn cta-btn" id = "eliminar${producto.id}" >Eliminar Producto</button>
                        </div>
                    </div>`;
                        modalContainer.appendChild(carritoContent);

                        const boton = document.getElementById(`eliminar${producto.id}`)
                        boton.addEventListener("click", () => {
                            eliminarDelCarrito(producto.id);
                        })


                       


            });
                    
            const total = carrito.reduce((acc, el) => acc + el.precio, 0);
            
            const totalCompra = document.createElement("div")
            totalCompra.className = "total-contenido"
            totalCompra.innerHTML = `<h3> El total de tu compra es : ${total} $ </h3>`;
            modalContainer.appendChild(totalCompra);

};

verCarrito.addEventListener("click", pintarCarrito);

//Funcion que elimina el producto del carrito

const eliminarDelCarrito = (id) => {
    const producto = carrito.find (producto => producto.id === id);
    const indice = carrito.indexOf(producto);
    carrito.splice(indice, 1);

    pintarCarrito();
} */
    