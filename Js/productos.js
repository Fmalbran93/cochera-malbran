
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

