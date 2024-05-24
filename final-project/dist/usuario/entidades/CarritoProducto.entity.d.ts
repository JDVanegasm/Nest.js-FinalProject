import { Producto } from "./producto.entity";
import { Carrito } from "./carrito.entity";
export declare class CarritoProducto {
    id: number;
    cantidad: number;
    producto: Producto;
    carrito: Carrito;
}
