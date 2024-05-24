import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Pedido } from 'src/usuario/entidades/Pedido.entity';
import { pedidoDto } from 'src/usuario/dto/pedido.dto';

@Injectable()
export class PedidoService {
  constructor(
    @InjectRepository(Pedido)
    private readonly pedidoRepository: Repository<Pedido>,
  ) {}

  async crearPedido(createPedidoDto: pedidoDto): Promise<Pedido> {
    const pedido = this.pedidoRepository.create(createPedidoDto);
    return await this.pedidoRepository.save(pedido);
  }

  async consultarTodos(): Promise<Pedido[]> {
    return await this.pedidoRepository.find({ relations: ['carrito'] });
  }

  async consultarPedido(id: string): Promise<Pedido> {
    return await this.pedidoRepository.findOne({ where: { id }, relations: ['carrito'] });
  }

  async actualizarPedido(id: string, updatePedidoDto: pedidoDto): Promise<Pedido> {
    await this.pedidoRepository.update(id, updatePedidoDto);
    return this.consultarPedido(id);
  }

  async eliminarPedido(id: string): Promise<void> {
    await this.pedidoRepository.delete(id);
  }
}
