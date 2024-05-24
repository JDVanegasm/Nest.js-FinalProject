import { Controller, Get, Post, Body, Param, Put, Delete, UsePipes, ValidationPipe } from '@nestjs/common';
import { ProductoService } from 'src/usuario/servicios/producto/producto.service';
import { productoDto } from 'src/usuario/dto/producto.dto';
import { ApiTags, ApiOperation, ApiBody, ApiResponse } from '@nestjs/swagger';

@Controller('producto')
@ApiTags('Producto')
export class ProductoController {
  constructor(private readonly productoService: ProductoService) {}

  @Post('crearProducto')
  @UsePipes(new ValidationPipe())
  @ApiOperation({ summary: 'Crear un nuevo producto' })
  @ApiBody({ type: productoDto })
  @ApiResponse({ status: 201, description: 'Producto creado con éxito' })
  @ApiResponse({ status: 400, description: 'Datos de producto inválidos' })
  async crearProducto(@Body() createProductoDto: productoDto) {
    return await this.productoService.crearProducto(createProductoDto);
  }

  @Get('consultarProductos')
  @ApiOperation({ summary: 'Consultar todos los productos' })
  @ApiResponse({ status: 200, description: 'Consulta exitosa' })
  async consultarProductos() {
    return await this.productoService.consultarTodos();
  }

  @Get('consultarProducto/:id')
  @ApiOperation({ summary: 'Consultar un producto por ID' })
  @ApiResponse({ status: 200, description: 'Consulta exitosa' })
  @ApiResponse({ status: 404, description: 'Producto no encontrado' })
  async consultarProducto(@Param('id') id: string) {
    return await this.productoService.consultarProducto(id);
  }

  @Put('actualizarProducto/:id')
  @UsePipes(new ValidationPipe())
  @ApiOperation({ summary: 'Actualizar un producto por ID' })
  @ApiBody({ type: productoDto })
  @ApiResponse({ status: 200, description: 'Producto actualizado con éxito' })
  @ApiResponse({ status: 404, description: 'Producto no encontrado' })
  async actualizarProducto(@Param('id') id: string, @Body() updateProductoDto: productoDto) {
    return await this.productoService.actualizarProducto(id, updateProductoDto);
  }

  @Delete('eliminarProducto/:id')
  @ApiOperation({ summary: 'Eliminar un producto por ID' })
  @ApiResponse({ status: 200, description: 'Producto eliminado con éxito' })
  @ApiResponse({ status: 404, description: 'Producto no encontrado' })
  async eliminarProducto(@Param('id') id: string) {
    return await this.productoService.eliminarProducto(id);
  }
}
