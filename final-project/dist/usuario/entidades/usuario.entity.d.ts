import { Rol } from './rol.entity';
import { Carrito } from './Carrito.entity';
import { Pedido } from './Pedido.entity';
export declare class usuario {
    id: number;
    cedula: string;
    nombre: string;
    apellido: string;
    fechaNacimiento: Date;
    telefono: string;
    correo: string;
    direccion: string;
    password: string;
    fk_rol_user: Rol;
    carrito: Carrito;
    Pedido: Pedido[];
}
