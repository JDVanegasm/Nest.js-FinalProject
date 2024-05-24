import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Carrito } from 'src/usuario/entidades/Carrito.entity';
import { carritoDto } from 'src/usuario/dto/carrito.dto';

@Injectable()
export class CarritoService {
  constructor(
    @InjectRepository(Carrito)
    private readonly carritoRepository: Repository<Carrito>,
  ) {}

  async crearCarrito(createCarritoDto: carritoDto): Promise<Carrito> {
    const carrito = this.carritoRepository.create(createCarritoDto);
    return await this.carritoRepository.save(carrito);
  }

  async consultarTodos(): Promise<Carrito[]> {
    return await this.carritoRepository.find();
  }

  async consultarCarrito(id: string): Promise<Carrito> {
    return await this.carritoRepository.findOne({ where: { id } });
  }

  async actualizarCarrito(id: string, updateCarritoDto: carritoDto): Promise<Carrito> {
    await this.carritoRepository.update(id, updateCarritoDto);
    return this.consultarCarrito(id);
  }

  async eliminarCarrito(id: string): Promise<void> {
    await this.carritoRepository.delete(id);
  }
}
