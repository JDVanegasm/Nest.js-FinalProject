import { usuarioService } from 'src/usuario/servicios/usuario.services';
import { actualizarUsuarioDto, crearUsuarioDto } from '../dto/usuario.dto';
export declare class UsuarioController {
    private usuarioService;
    constructor(usuarioService: usuarioService);
    findAll(): string;
    crearUsuario(data: crearUsuarioDto): Promise<{
        statusCode: number;
        message: string;
        response?: undefined;
    } | {
        statusCode: number;
        message: string;
        response: import("../entidades/usuario.entity").usuario;
    }>;
    consultarUsuario(): Promise<import("../entidades/usuario.entity").usuario[]>;
    actualizarUsuario(cedula: string, data: actualizarUsuarioDto): Promise<{
        statusCode: number;
        message: string;
        response: import("../entidades/usuario.entity").usuario;
    } | {
        statusCode: number;
        message: string;
        response?: undefined;
    }>;
    eliminarUsuario(cedula: string): Promise<{
        statusCode: number;
        message: string;
    }>;
    consultarUsuarioCedula(cedula: string): Promise<import("../entidades/usuario.entity").usuario>;
}
