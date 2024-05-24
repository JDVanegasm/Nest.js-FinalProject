import { Categoria } from "./Categoria.entity";
import { Carrito } from "./Carrito.entity";
export declare class Producto {
    id: string;
    nombre: string;
    descripcion: string;
    precio: number;
    categoria: string;
    fk_categoria_producto: Categoria;
    carritos: Carrito[];
}
