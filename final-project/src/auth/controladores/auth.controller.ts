import { Controller, Post, Body, UsePipes, ValidationPipe } from '@nestjs/common';
import { crearLoginDto } from '../dto/login.dto';
import { AuthService } from '../servicios/auth.service';
import { ApiOperation, ApiBody, ApiResponse, ApiTags } from '@nestjs/swagger';

@Controller('auth')
@ApiTags('Auth') // Categoriza este controlador dentro de la sección 'Auth' en la documentación Swagger
export class AuthController {
    constructor(private authService: AuthService) {}

    @Post('login')
    @ApiOperation({
      summary: 'User login',
      description: 'Log in a user by using email and password.'
    }) // Describe la operación y proporciona un resumen
    @ApiBody({
      description: 'Login credentials', // Describe el cuerpo de la petición
      type: crearLoginDto
    })
    @ApiResponse({
      status: 200,
      description: 'Login successful', // Describe una respuesta exitosa
    })
    @ApiResponse({
      status: 400,
      description: 'Invalid input data', // Describe una respuesta de error
    })
    @ApiResponse({
      status: 401,
      description: 'Unauthorized', // Describe una respuesta de error
    })
    @UsePipes(new ValidationPipe({
      transform: true, // Opcional: transforma el payload a la instancia de la clase DTO
      whitelist: true, // Valida solo las propiedades que están decoradas en el DTO
    }))
    login(@Body() payload: crearLoginDto) {
        return this.authService.login(payload.correo, payload.password);
    }
}
