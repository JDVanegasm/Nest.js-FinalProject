import { Controller, Get, Post, Body, Param, Put, Delete, UsePipes, ValidationPipe } from '@nestjs/common';
import { CarritoService } from 'src/usuario/servicios/carrito/carrito.service';
import { carritoDto } from 'src/usuario/dto/carrito.dto';
import { ApiTags, ApiOperation, ApiBody, ApiResponse } from '@nestjs/swagger';

@Controller('carrito')
@ApiTags('Carrito')
export class CarritoController {
  constructor(private readonly carritoService: CarritoService) {}

  @Post('crearCarrito')
  @UsePipes(new ValidationPipe())
  @ApiOperation({ summary: 'Crear un nuevo carrito' })
  @ApiBody({ type: carritoDto })
  @ApiResponse({ status: 201, description: 'Carrito creado con éxito' })
  @ApiResponse({ status: 400, description: 'Datos de carrito inválidos' })
  async crearCarrito(@Body() createCarritoDto: carritoDto) {
    return await this.carritoService.crearCarrito(createCarritoDto);
  }

  @Get('consultarCarritos')
  @ApiOperation({ summary: 'Consultar todos los carritos' })
  @ApiResponse({ status: 200, description: 'Consulta exitosa' })
  async consultarCarritos() {
    return await this.carritoService.consultarTodos();
  }

  @Get('consultarCarrito/:id')
  @ApiOperation({ summary: 'Consultar un carrito por ID' })
  @ApiResponse({ status: 200, description: 'Consulta exitosa' })
  @ApiResponse({ status: 404, description: 'Carrito no encontrado' })
  async consultarCarrito(@Param('id') id: string) {
    return await this.carritoService.consultarCarrito(id);
  }

  @Put('actualizarCarrito/:id')
  @UsePipes(new ValidationPipe())
  @ApiOperation({ summary: 'Actualizar un carrito por ID' })
  @ApiBody({ type: carritoDto })
  @ApiResponse({ status: 200, description: 'Carrito actualizado con éxito' })
  @ApiResponse({ status: 404, description: 'Carrito no encontrado' })
  async actualizarCarrito(@Param('id') id: string, @Body() updateCarritoDto: carritoDto) {
    return await this.carritoService.actualizarCarrito(id, updateCarritoDto);
  }

  @Delete('eliminarCarrito/:id')
  @ApiOperation({ summary: 'Eliminar un carrito por ID' })
  @ApiResponse({ status: 200, description: 'Carrito eliminado con éxito' })
  @ApiResponse({ status: 404, description: 'Carrito no encontrado' })
  async eliminarCarrito(@Param('id') id: string) {
    return await this.carritoService.eliminarCarrito(id);
  }
}
