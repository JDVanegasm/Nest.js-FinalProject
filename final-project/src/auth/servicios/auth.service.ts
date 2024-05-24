import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { usuario } from 'src/usuario/entidades/usuario.entity';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {

    constructor(
        @InjectRepository(usuario)
        private usuarioRepo: Repository<usuario>,
        private jwtService: JwtService
    ){}

    async login(correo: string, password: string) {
        try{
        const user = await this.usuarioRepo.find({where:[{ correo: correo , password: password}] , relations: ["fk_rol_user"]});
        if (user.length == 0) {
          return{
            statusCode: 404,
            message: "Usuario o contraseña incorrectos"
          }
        }
        const payload = { username: user[0].correo, sub: user[0].cedula, roles: user[0].fk_rol_user.nombre };

        return {
          statusCode: 200,
          user: user,
          access_token: this.jwtService.sign(payload),
          Response: true
        }
      }catch(error){
        return {
          statusCode: 500,
          message: 'Error Interno'
      }
  
      }
      }

}
