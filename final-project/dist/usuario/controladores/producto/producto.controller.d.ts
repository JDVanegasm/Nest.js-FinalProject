import { ProductoService } from 'src/usuario/servicios/producto/producto.service';
import { productoDto } from 'src/usuario/dto/producto.dto';
export declare class ProductoController {
    private readonly productoService;
    constructor(productoService: ProductoService);
    crearProducto(createProductoDto: productoDto): Promise<import("../../entidades/producto.entity").Producto>;
    consultarProductos(): Promise<import("../../entidades/producto.entity").Producto[]>;
    consultarProducto(id: string): Promise<import("../../entidades/producto.entity").Producto>;
    actualizarProducto(id: string, updateProductoDto: productoDto): Promise<import("../../entidades/producto.entity").Producto>;
    eliminarProducto(id: string): Promise<void>;
}
