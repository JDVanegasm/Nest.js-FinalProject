import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Producto } from 'src/usuario/entidades/producto.entity';
import { productoDto } from 'src/usuario/dto/producto.dto'; 

@Injectable()
export class ProductoService {
  constructor(
    @InjectRepository(Producto)
    private readonly productoRepository: Repository<Producto>,
  ) {}

  async crearProducto(createProductoDto: productoDto): Promise<Producto> {
    const producto = this.productoRepository.create(createProductoDto);
    return await this.productoRepository.save(producto);
  }

  async consultarTodos(): Promise<Producto[]> {
    return await this.productoRepository.find();
  }

  async consultarProducto(id: string): Promise<Producto> {
    return await this.productoRepository.findOne({ where: { id } });
  }

  async actualizarProducto(id: string, updateProductoDto: productoDto): Promise<Producto> {
    await this.productoRepository.update(id, updateProductoDto);
    return this.consultarProducto(id);
  }

  async eliminarProducto(id: string): Promise<void> {
    await this.productoRepository.delete(id);
  }
}
