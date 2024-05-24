import { CategoriaService } from 'src/usuario/servicios/categoria/categoria.service';
import { categoriaDto } from 'src/usuario/dto/categoria.dto';
export declare class CategoriaController {
    private readonly categoriaService;
    constructor(categoriaService: CategoriaService);
    crearCategoria(createCategoriaDto: categoriaDto): Promise<import("../../entidades/Categoria.entity").Categoria>;
    consultarCategorias(): Promise<import("../../entidades/Categoria.entity").Categoria[]>;
    consultarCategoria(id: string): Promise<import("../../entidades/Categoria.entity").Categoria>;
    actualizarCategoria(id: string, updateCategoriaDto: categoriaDto): Promise<import("../../entidades/Categoria.entity").Categoria>;
    eliminarCategoria(id: string): Promise<void>;
}
