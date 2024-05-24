import { usuario } from "./usuario.entity";
import { Producto } from "./producto.entity";
export declare class Carrito {
    id: string;
    usuarioId: string;
    productoId: string;
    cantidad: number;
    usuario: usuario;
    productos: Producto[];
}
