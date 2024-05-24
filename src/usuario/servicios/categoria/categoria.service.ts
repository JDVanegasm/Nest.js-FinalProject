import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Categoria } from 'src/usuario/entidades/Categoria.entity';
import { categoriaDto } from 'src/usuario/dto/categoria.dto';

@Injectable()
export class CategoriaService {
  constructor(
    @InjectRepository(Categoria)
    private readonly categoriaRepository: Repository<Categoria>,
  ) {}

  async crearCategoria(createCategoriaDto: categoriaDto): Promise<Categoria> {
    const categoria = this.categoriaRepository.create(createCategoriaDto);
    return await this.categoriaRepository.save(categoria);
  }

  async consultarTodas(): Promise<Categoria[]> {
    return await this.categoriaRepository.find();
  }

  async consultarCategoria(id: string): Promise<Categoria> {
    return await this.categoriaRepository.findOne({ where: { id } });
  }

  async actualizarCategoria(id: string, updateCategoriaDto: categoriaDto): Promise<Categoria> {
    await this.categoriaRepository.update(id, updateCategoriaDto);
    return this.consultarCategoria(id);
  }

  async eliminarCategoria(id: string): Promise<void> {
    await this.categoriaRepository.delete(id);
  }
}
