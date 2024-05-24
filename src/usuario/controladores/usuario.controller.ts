import { Controller, Get, Post, Param, Put, Body, UsePipes, ValidationPipe, ParseIntPipe, Delete, UseGuards } from '@nestjs/common';
import { usuarioService } from 'src/usuario/servicios/usuario.services';
import { actualizarUsuarioDto, crearUsuarioDto } from '../dto/usuario.dto';
import { crearLoginDto } from '../../auth/dto/login.dto';
import { ApiBody, ApiOperation, ApiResponse, ApiTags, ApiParam } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { RolesGuard } from 'src/auth/guards/roles.guards';
import { Roles } from 'src/auth/guards/roles.decorator';

@UseGuards(JwtAuthGuard, RolesGuard)
@Controller('usuario')
@ApiTags('Usuario')
export class UsuarioController {
  constructor(private usuarioService: usuarioService) {}

  @Get('prueba')
  @Roles('Administrador','Empleado', 'Cliente')
  @ApiOperation({ summary: 'Obtener una prueba' })
  @ApiResponse({ status: 200, description: 'Prueba obtenida correctamente' })
  findAll(): string {
    return this.usuarioService.prueba();
  }

  @Post('crearUsuario')
  @UsePipes(new ValidationPipe())
  @ApiOperation({ summary: 'Crear un nuevo usuario' })
  @ApiBody({ type: crearUsuarioDto }) // Especifica el tipo del cuerpo esperado
  @ApiResponse({ status: 201, description: 'Usuario creado con éxito' })
  @ApiResponse({ status: 400, description: 'Datos de usuario inválidos' })
  async crearUsuario(@Body() data: crearUsuarioDto) {
    return await this.usuarioService.crearUsuario(data);
  }

  @Get('consultarUsuario')
  @ApiOperation({ summary: 'Consultar todos los usuarios' })
  @ApiResponse({ status: 200, description: 'Usuarios consultados correctamente' })
  async consultarUsuario(){
    return await this.usuarioService.consultarTodos();
  }

  @Put('actualizarUsuario/:cedula')
  @UsePipes(new ValidationPipe())
  @ApiOperation({ summary: 'Actualizar un usuario específico por cédula' })
  @ApiParam({ name: 'cedula', type: 'string', description: 'Cédula del usuario a actualizar' })
  @ApiBody({ type: actualizarUsuarioDto })
  @ApiResponse({ status: 200, description: 'Usuario actualizado correctamente' })
  @ApiResponse({ status: 404, description: 'Usuario no encontrado' })
  async actualizarUsuario(@Param('cedula', ParseIntPipe) cedula: string, @Body() data: actualizarUsuarioDto) {
    return await this.usuarioService.actualizarUsuario(cedula, data);
  }

  @Delete('eliminarUsuario/:cedula')
  @UsePipes(new ValidationPipe())
  @ApiOperation({ summary: 'Eliminar un usuario específico por cédula' })
  @ApiParam({ name: 'cedula', type: 'string', description: 'Cédula del usuario a eliminar' })
  @ApiResponse({ status: 200, description: 'Usuario eliminado correctamente' })
  @ApiResponse({ status: 404, description: 'Usuario no encontrado' })
  async eliminarUsuario(@Param('cedula', ParseIntPipe) cedula: string) {
    return await this.usuarioService.eliminarUsuario(cedula);
  }

  @Get('consultarUsuarioCedula/:cedula')
  @ApiOperation({ summary: 'Consultar usuario por cédula' })
  @ApiParam({ name: 'cedula', type: 'string', description: 'Cédula del usuario a consultar' })
  @ApiResponse({ status: 200, description: 'Usuario consultado correctamente' })
  @ApiResponse({ status: 404, description: 'Usuario no encontrado' })
  async consultarUsuarioCedula(@Param('cedula', ParseIntPipe) cedula: string){
    return await this.usuarioService.consultarTodosCedula(cedula);
  }
}
