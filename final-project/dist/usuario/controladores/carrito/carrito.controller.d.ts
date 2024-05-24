import { CarritoService } from 'src/usuario/servicios/carrito/carrito.service';
import { carritoDto } from 'src/usuario/dto/carrito.dto';
export declare class CarritoController {
    private readonly carritoService;
    constructor(carritoService: CarritoService);
    crearCarrito(createCarritoDto: carritoDto): Promise<import("../../entidades/Carrito.entity").Carrito>;
    consultarCarritos(): Promise<import("../../entidades/Carrito.entity").Carrito[]>;
    consultarCarrito(id: string): Promise<import("../../entidades/Carrito.entity").Carrito>;
    actualizarCarrito(id: string, updateCarritoDto: carritoDto): Promise<import("../../entidades/Carrito.entity").Carrito>;
    eliminarCarrito(id: string): Promise<void>;
}
