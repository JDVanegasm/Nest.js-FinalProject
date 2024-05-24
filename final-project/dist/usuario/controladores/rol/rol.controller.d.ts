import { crearRolDto, actualizarRolDto } from 'src/usuario/dto/rol.dto';
import { RolService } from 'src/usuario/servicios/rol/rol.service';
export declare class RolController {
    private rolService;
    constructor(rolService: RolService);
    crearRol(data: crearRolDto): Promise<{
        statusCode: number;
        message: string;
        response?: undefined;
    } | {
        statusCode: number;
        message: string;
        response: import("../../entidades/rol.entity").Rol;
    }>;
    consultarRoles(): Promise<import("../../entidades/rol.entity").Rol[]>;
    consultarRolId(id: number): Promise<import("../../entidades/rol.entity").Rol>;
    actualizarRol(id: number, data: actualizarRolDto): Promise<{
        statusCode: number;
        message: string;
        response: import("../../entidades/rol.entity").Rol;
    } | {
        statusCode: number;
        message: string;
        response?: undefined;
    }>;
    eliminarRol(id: number): Promise<{
        statusCode: number;
        message: string;
    }>;
}
