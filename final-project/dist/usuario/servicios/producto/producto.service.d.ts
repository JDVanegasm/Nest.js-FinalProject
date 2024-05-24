import { Repository } from 'typeorm';
import { Producto } from 'src/usuario/entidades/producto.entity';
import { productoDto } from 'src/usuario/dto/producto.dto';
export declare class ProductoService {
    private readonly productoRepository;
    constructor(productoRepository: Repository<Producto>);
    crearProducto(createProductoDto: productoDto): Promise<Producto>;
    consultarTodos(): Promise<Producto[]>;
    consultarProducto(id: string): Promise<Producto>;
    actualizarProducto(id: string, updateProductoDto: productoDto): Promise<Producto>;
    eliminarProducto(id: string): Promise<void>;
}
