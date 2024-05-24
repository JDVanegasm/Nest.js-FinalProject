import { Controller, Get, Post, Body, Param, Put, Delete, UsePipes, ValidationPipe } from '@nestjs/common';
import { CategoriaService } from 'src/usuario/servicios/categoria/categoria.service';
import { categoriaDto } from 'src/usuario/dto/categoria.dto';
import { ApiTags, ApiOperation, ApiBody, ApiResponse } from '@nestjs/swagger';

@Controller('categoria')
@ApiTags('Categoria')
export class CategoriaController {
  constructor(private readonly categoriaService: CategoriaService) {}

  @Post('crearCategoria')
  @UsePipes(new ValidationPipe())
  @ApiOperation({ summary: 'Crear una nueva categoría' })
  @ApiBody({ type: categoriaDto })
  @ApiResponse({ status: 201, description: 'Categoría creada con éxito' })
  @ApiResponse({ status: 400, description: 'Datos de categoría inválidos' })
  async crearCategoria(@Body() createCategoriaDto: categoriaDto) {
    return await this.categoriaService.crearCategoria(createCategoriaDto);
  }

  @Get('consultarCategorias')
  @ApiOperation({ summary: 'Consultar todas las categorías' })
  @ApiResponse({ status: 200, description: 'Consulta exitosa' })
  async consultarCategorias() {
    return await this.categoriaService.consultarTodas();
  }

  @Get('consultarCategoria/:id')
  @ApiOperation({ summary: 'Consultar una categoría por ID' })
  @ApiResponse({ status: 200, description: 'Consulta exitosa' })
  @ApiResponse({ status: 404, description: 'Categoría no encontrada' })
  async consultarCategoria(@Param('id') id: string) {
    return await this.categoriaService.consultarCategoria(id);
  }

  @Put('actualizarCategoria/:id')
  @UsePipes(new ValidationPipe())
  @ApiOperation({ summary: 'Actualizar una categoría por ID' })
  @ApiBody({ type: categoriaDto })
  @ApiResponse({ status: 200, description: 'Categoría actualizada con éxito' })
  @ApiResponse({ status: 404, description: 'Categoría no encontrada' })
  async actualizarCategoria(@Param('id') id: string, @Body() updateCategoriaDto: categoriaDto) {
    return await this.categoriaService.actualizarCategoria(id, updateCategoriaDto);
  }

  @Delete('eliminarCategoria/:id')
  @ApiOperation({ summary: 'Eliminar una categoría por ID' })
  @ApiResponse({ status: 200, description: 'Categoría eliminada con éxito' })
  @ApiResponse({ status: 404, description: 'Categoría no encontrada' })
  async eliminarCategoria(@Param('id') id: string) {
    return await this.categoriaService.eliminarCategoria(id);
  }
}
