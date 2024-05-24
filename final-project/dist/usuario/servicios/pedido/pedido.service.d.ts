import { Repository } from 'typeorm';
import { Pedido } from 'src/usuario/entidades/Pedido.entity';
import { pedidoDto } from 'src/usuario/dto/pedido.dto';
export declare class PedidoService {
    private readonly pedidoRepository;
    constructor(pedidoRepository: Repository<Pedido>);
    crearPedido(createPedidoDto: pedidoDto): Promise<Pedido>;
    consultarTodos(): Promise<Pedido[]>;
    consultarPedido(id: string): Promise<Pedido>;
    actualizarPedido(id: string, updatePedidoDto: pedidoDto): Promise<Pedido>;
    eliminarPedido(id: string): Promise<void>;
}
