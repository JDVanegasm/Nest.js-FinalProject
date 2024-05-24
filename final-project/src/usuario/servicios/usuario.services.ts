import { Injectable, NotFoundException } from '@nestjs/common';
import { Repository, DeepPartial } from 'typeorm';
import { usuario } from '../entidades/usuario.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { crearUsuarioDto, actualizarUsuarioDto } from '../dto/usuario.dto';
import { Rol } from '../entidades/rol.entity';

@Injectable()
export class usuarioService {
    constructor(
        @InjectRepository(usuario)
        private usuarioRepo: Repository<usuario>,
    ){}


     prueba():string {
        return 'Mi primer servicio';
    }

    
  

    //Crear Usuario
    async crearUsuario(data: crearUsuarioDto){
      try{
      const user = await this.usuarioRepo.find({where:[{ cedula: data.cedula}, { correo: data.correo} ]});
      
      if( user.length > 0){
        return{ 
          statusCode: 200,
          message: 'Usuario ya creado'
        }
      }else{
        
        const nuevoUsuario = this.usuarioRepo.create(data);
        return {      
          statusCode: 201,
          message: 'Usuario creado',
          response: await this.usuarioRepo.save(nuevoUsuario)
        }
      }
    }catch(error) {
      return {
          statusCode: 500,
          message: 'Error Interno'
      }
    }
  }

  //Consultar Usuario
  async consultarTodos(){
    return await this.usuarioRepo.find({
      relations: ["fk_rol_user"]}); 
  }

  //Consultar Usuario Id
  async consultarTodosCedula(cedula: string){
    return await this.usuarioRepo.findOne({where: {cedula: cedula}, relations: ["fk_rol_user"]}); 
  }


  //actualizar Usuario
  async actualizarUsuario(cedula: string, data: actualizarUsuarioDto){
    try{
    const user = await this.usuarioRepo.findOne({where:{ cedula: cedula}});
    if(user){
    await this.usuarioRepo.merge(user, data);
    return {      
      statusCode: 201,
      message: 'El usuario ha sido actualizado',
      response: await this.usuarioRepo.save(user)
    }    
  }else{
    return {      
      statusCode: 200,
      message: 'Usuario no encontrado'
    }    

  } 
  }catch(error) {
    return {      
        statusCode: 500,
        message: 'Error Interno'
      } 
  }
}

async eliminarUsuario(cedula: string){
  try{
      const user = await this.usuarioRepo.findOne({where:{ cedula: cedula}});
      if(user){
      await this.usuarioRepo.delete(user);
      return {
          statusCode: 202,
          message: 'El usuario ha sido eliminado'
      }
    }else{
      return {      
        statusCode: 200,
        message: 'Usuario no encontrado'
      } 

    }

  }
  catch(error){
      return {      
          statusCode: 500,
          message: 'Error Interno'
        } 

      }
    
    }



}


