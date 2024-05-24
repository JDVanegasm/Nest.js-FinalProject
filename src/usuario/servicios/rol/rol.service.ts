import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { actualizarRolDto, crearRolDto } from 'src/usuario/dto/rol.dto';
import { Rol } from 'src/usuario/entidades/rol.entity';
import { Repository } from 'typeorm';

@Injectable()
export class RolService {
    constructor(
        @InjectRepository(Rol)
        private rolRepo: Repository<Rol>
    ){}

    //Crear Rol
    async crearRol(data: crearRolDto){
        try{
        const rol = await this.rolRepo.find({where:[{ nombre: data.nombre} ]});
        
        if( rol.length > 0){
          return{ 
            statusCode: 200,
            message: 'Rol ya creado'
          }
        }else{
          
          const nuevoRol = this.rolRepo.create(data);
          return {      
            statusCode: 201,
            message: 'Rol creado',
            response: await this.rolRepo.save(nuevoRol)
          }
        }
      }catch(error) {
        return {
            statusCode: 500,
            message: 'Error Interno'
        }
      }
    }

  //Consultar Roles
  async consultarTodos(){
    return await this.rolRepo.find(); 
  }

  //Consultar Rol Id
  async consultarTodosId(id: number){
    return await this.rolRepo.findOne({where: {id: id}}); 
  }

  //actualizar Rol
  async actualizarRol(id: number, data: actualizarRolDto){
    try{
    const rol = await this.rolRepo.findOne({where:{ id: id}});
    if(rol){
    await this.rolRepo.merge(rol, data);
    return {      
      statusCode: 201,
      message: 'El rol ha sido actualizado',
      response: await this.rolRepo.save(rol)
    }    
  }else{
    return {      
      statusCode: 200,
      message: 'Rol no encontrado'
    }    

  } 
  }catch(error) {
    return {      
        statusCode: 500,
        message: 'Error Interno'
      } 
  }
}

async eliminarRol(id: number){
  try{
      const rol = await this.rolRepo.findOne({where:{ id: id}});
      if(rol){
      await this.rolRepo.delete(rol);
      return {
          statusCode: 202,
          message: 'El rol ha sido eliminado'
      }
    }else{
      return {      
        statusCode: 200,
        message: 'Rol no encontrado'
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
