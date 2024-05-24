import { Controller, Get, Post, Body, Param, Put, Delete, UsePipes, ValidationPipe } from '@nestjs/common';
import { PedidoService } from 'src/usuario/servicios/pedido/pedido.service';
import { pedidoDto } from 'src/usuario/dto/pedido.dto';
import { ApiTags, ApiOperation, ApiBody, ApiResponse } from '@nestjs/swagger';

@Controller('pedido')
@ApiTags('Pedido')
export class PedidoController {
  constructor(private readonly pedidoService: PedidoService) {}

  @Post('crearPedido')
  @UsePipes(new ValidationPipe())
  @ApiOperation({ summary: 'Crear un nuevo pedido' })
  @ApiBody({ type: pedidoDto })
  @ApiResponse({ status: 201, description: 'Pedido creado con éxito' })
  @ApiResponse({ status: 400, description: 'Datos de pedido inválidos' })
  async crearPedido(@Body() createPedidoDto: pedidoDto) {
    return await this.pedidoService.crearPedido(createPedidoDto);
  }

  @Get('consultarPedidos')
  @ApiOperation({ summary: 'Consultar todos los pedidos' })
  @ApiResponse({ status: 200, description: 'Consulta exitosa' })
  async consultarPedidos() {
    return await this.pedidoService.consultarTodos();
  }

  @Get('consultarPedido/:id')
  @ApiOperation({ summary: 'Consultar un pedido por ID' })
  @ApiResponse({ status: 200, description: 'Consulta exitosa' })
  @ApiResponse({ status: 404, description: 'Pedido no encontrado' })
  async consultarPedido(@Param('id') id: string) {
    return await this.pedidoService.consultarPedido(id);
  }

  @Put('actualizarPedido/:id')
  @UsePipes(new ValidationPipe())
  @ApiOperation({ summary: 'Actualizar un pedido por ID' })
  @ApiBody({ type: pedidoDto })
  @ApiResponse({ status: 200, description: 'Pedido actualizado con éxito' })
  @ApiResponse({ status: 404, description: 'Pedido no encontrado' })
  async actualizarPedido(@Param('id') id: string, @Body() updatePedidoDto: pedidoDto) {
    return await this.pedidoService.actualizarPedido(id, updatePedidoDto);
  }

  @Delete('eliminarPedido/:id')
  @ApiOperation({ summary: 'Eliminar un pedido por ID' })
  @ApiResponse({ status: 200, description: 'Pedido eliminado con éxito' })
  @ApiResponse({ status: 404, description: 'Pedido no encontrado' })
  async eliminarPedido(@Param('id') id: string) {
    return await this.pedidoService.eliminarPedido(id);
  }
}
