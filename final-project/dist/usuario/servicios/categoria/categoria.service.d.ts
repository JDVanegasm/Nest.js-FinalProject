import { Repository } from 'typeorm';
import { Categoria } from 'src/usuario/entidades/Categoria.entity';
import { categoriaDto } from 'src/usuario/dto/categoria.dto';
export declare class CategoriaService {
    private readonly categoriaRepository;
    constructor(categoriaRepository: Repository<Categoria>);
    crearCategoria(createCategoriaDto: categoriaDto): Promise<Categoria>;
    consultarTodas(): Promise<Categoria[]>;
    consultarCategoria(id: string): Promise<Categoria>;
    actualizarCategoria(id: string, updateCategoriaDto: categoriaDto): Promise<Categoria>;
    eliminarCategoria(id: string): Promise<void>;
}
