//FUNCION PARA MOSTRAR CARRITO


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
                        <button class= "btn cta-btn" id = "Eliminar${producto.id}" >Eliminar Producto</button>
                        </div>
                    </div>`;

                        modalContainer.appendChild(carritoContent);


                        


            });
                    
            const total = carrito.reduce((acc, el) => acc + el.precio, 0);
            
            const totalCompra = document.createElement("div")
            totalCompra.className = "total-contenido"
            totalCompra.innerHTML = `<h3> El total de tu compra es : ${total} $ </h3>`;
            modalContainer.appendChild(totalCompra);

});