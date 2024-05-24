import { Repository } from 'typeorm';
import { usuario } from 'src/usuario/entidades/usuario.entity';
import { JwtService } from '@nestjs/jwt';
export declare class AuthService {
    private usuarioRepo;
    private jwtService;
    constructor(usuarioRepo: Repository<usuario>, jwtService: JwtService);
    login(correo: string, password: string): Promise<{
        statusCode: number;
        message: string;
        user?: undefined;
        access_token?: undefined;
        Response?: undefined;
    } | {
        statusCode: number;
        user: usuario[];
        access_token: string;
        Response: boolean;
        message?: undefined;
    }>;
}
