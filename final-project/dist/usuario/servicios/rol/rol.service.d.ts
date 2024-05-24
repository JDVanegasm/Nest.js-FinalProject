import { actualizarRolDto, crearRolDto } from 'src/usuario/dto/rol.dto';
import { Rol } from 'src/usuario/entidades/rol.entity';
import { Repository } from 'typeorm';
export declare class RolService {
    private rolRepo;
    constructor(rolRepo: Repository<Rol>);
    crearRol(data: crearRolDto): Promise<{
        statusCode: number;
        message: string;
        response?: undefined;
    } | {
        statusCode: number;
        message: string;
        response: Rol;
    }>;
    consultarTodos(): Promise<Rol[]>;
    consultarTodosId(id: number): Promise<Rol>;
    actualizarRol(id: number, data: actualizarRolDto): Promise<{
        statusCode: number;
        message: string;
        response: Rol;
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
