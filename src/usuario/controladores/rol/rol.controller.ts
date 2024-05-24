import { Body, Controller, Get, Param, ParseIntPipe, Post, Put, Delete, UsePipes, ValidationPipe } from '@nestjs/common';
import { crearRolDto, actualizarRolDto } from 'src/usuario/dto/rol.dto'; // Asegúrate de que actualizarRolDto está correctamente definido
import { RolService } from 'src/usuario/servicios/rol/rol.service';
import { ApiBody, ApiOperation, ApiResponse, ApiParam, ApiTags } from '@nestjs/swagger';

@Controller('rol')
@ApiTags('Rol')
export class RolController {
    constructor(private rolService: RolService) {}

    @Post('crearRol')
    @ApiOperation({ summary: 'Crear un nuevo rol' })
    @ApiBody({ type: crearRolDto })
    @ApiResponse({ status: 201, description: 'Rol creado con éxito' })
    @ApiResponse({ status: 400, description: 'Datos de rol inválidos' })
    @UsePipes(new ValidationPipe())
    async crearRol(@Body() data: crearRolDto) {
        return await this.rolService.crearRol(data);
    }

    @Get('consultarRoles')
    @ApiOperation({ summary: 'Consultar todos los roles' })
    @ApiResponse({ status: 200, description: 'Roles consultados correctamente' })
    async consultarRoles(){
        return await this.rolService.consultarTodos();
    }

    @Get('consultarRolId/:id')
    @ApiOperation({ summary: 'Consultar un rol por ID' })
    @ApiParam({ name: 'id', type: 'number', description: 'ID del rol a consultar' })
    @ApiResponse({ status: 200, description: 'Rol consultado correctamente' })
    @ApiResponse({ status: 404, description: 'Rol no encontrado' })
    async consultarRolId(@Param('id', ParseIntPipe) id: number){
        return await this.rolService.consultarTodosId(id);
    }

    @Put('actualizarRol/:id')
    @ApiOperation({ summary: 'Actualizar un rol específico por ID' })
    @ApiParam({ name: 'id', type: 'number', description: 'ID del rol a actualizar' })
    @ApiBody({ type: actualizarRolDto })
    @ApiResponse({ status: 200, description: 'Rol actualizado correctamente' })
    @ApiResponse({ status: 404, description: 'Rol no encontrado' })
    @UsePipes(new ValidationPipe())
    async actualizarRol(@Param('id', ParseIntPipe) id: number, @Body() data: actualizarRolDto) {
        return await this.rolService.actualizarRol(id, data);
    }

    @Delete('eliminarRol/:id')
    @ApiOperation({ summary: 'Eliminar un rol específico por ID' })
    @ApiParam({ name: 'id', type: 'number', description: 'ID del rol a eliminar' })
    @ApiResponse({ status: 200, description: 'Rol eliminado correctamente' })
    @ApiResponse({ status: 404, description: 'Rol no encontrado' })
    @UsePipes(new ValidationPipe())
    async eliminarRol(@Param('id', ParseIntPipe) id: number) {
        return await this.rolService.eliminarRol(id);
    }
}
