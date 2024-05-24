import { PedidoService } from 'src/usuario/servicios/pedido/pedido.service';
import { pedidoDto } from 'src/usuario/dto/pedido.dto';
export declare class PedidoController {
    private readonly pedidoService;
    constructor(pedidoService: PedidoService);
    crearPedido(createPedidoDto: pedidoDto): Promise<import("../../entidades/Pedido.entity").Pedido>;
    consultarPedidos(): Promise<import("../../entidades/Pedido.entity").Pedido[]>;
    consultarPedido(id: string): Promise<import("../../entidades/Pedido.entity").Pedido>;
    actualizarPedido(id: string, updatePedidoDto: pedidoDto): Promise<import("../../entidades/Pedido.entity").Pedido>;
    eliminarPedido(id: string): Promise<void>;
}
