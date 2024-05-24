import { Repository } from 'typeorm';
import { Carrito } from 'src/usuario/entidades/Carrito.entity';
import { carritoDto } from 'src/usuario/dto/carrito.dto';
export declare class CarritoService {
    private readonly carritoRepository;
    constructor(carritoRepository: Repository<Carrito>);
    crearCarrito(createCarritoDto: carritoDto): Promise<Carrito>;
    consultarTodos(): Promise<Carrito[]>;
    consultarCarrito(id: string): Promise<Carrito>;
    actualizarCarrito(id: string, updateCarritoDto: carritoDto): Promise<Carrito>;
    eliminarCarrito(id: string): Promise<void>;
}
