import { usuario } from "./usuario.entity";
export declare class Pedido {
    id: string;
    usuarioId: string;
    total: number;
    estado: boolean;
    fechaCreacion: string;
    fk_Pedido_user: usuario;
}
