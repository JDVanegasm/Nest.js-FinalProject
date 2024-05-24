import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { usuario } from './entidades/usuario.entity';
import { UsuarioController } from './controladores/usuario.controller';
import { usuarioService } from './servicios/usuario.services';
import { Rol } from './entidades/rol.entity';
import { RolController } from './controladores/rol/rol.controller';
import { RolService } from './servicios/rol/rol.service';
import { Producto } from './entidades/producto.entity';
import { ProductoController } from './controladores/producto/producto.controller';
import { ProductoService } from './servicios/producto/producto.service';
import { Categoria } from './entidades/Categoria.entity';
import { CategoriaController } from './controladores/categoria/categoria.controller';
import { CategoriaService } from './servicios/categoria/categoria.service';
import { Carrito } from './entidades/Carrito.entity';
import { CarritoController } from './controladores/carrito/carrito.controller';
import { CarritoService } from './servicios/carrito/carrito.service';
import { Pedido } from './entidades/Pedido.entity';
import { PedidoController } from './controladores/pedido/pedido.controller';
import { PedidoService } from './servicios/pedido/pedido.service';


@Module({
    imports: [TypeOrmModule.forFeature(
      [usuario, 
       Rol,
       Producto, 
       Categoria,
       Carrito,
       Pedido])],
    controllers:
    [UsuarioController, 
     RolController, 
     ProductoController, 
     CategoriaController,
     CarritoController,
     PedidoController
     ],
    providers: 
    [usuarioService,
     RolService,
     ProductoService, 
     CategoriaService,
     CarritoService,
     PedidoService],
    exports:
    [usuarioService, 
     RolService,
     ProductoService, 
     CategoriaService,
     CarritoService,
     PedidoService]
  })

export class UsuarioModule {

}