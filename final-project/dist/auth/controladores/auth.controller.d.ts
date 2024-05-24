import { crearLoginDto } from '../dto/login.dto';
import { AuthService } from '../servicios/auth.service';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    login(payload: crearLoginDto): Promise<{
        statusCode: number;
        message: string;
        user?: undefined;
        access_token?: undefined;
        Response?: undefined;
    } | {
        statusCode: number;
        user: import("../../usuario/entidades/usuario.entity").usuario[];
        access_token: string;
        Response: boolean;
        message?: undefined;
    }>;
}
