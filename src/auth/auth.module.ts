import { Module } from "@nestjs/common";
import { JwtModule } from "@nestjs/jwt";
import { PassportModule } from "@nestjs/passport";
import { AuthController } from "./controladores/auth.controller";
import { AuthService } from "./servicios/auth.service";
import { JwtStrategy } from "./estrategia/estrategia";
import { usuario } from "src/usuario/entidades/usuario.entity";
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
    imports:[PassportModule,
        TypeOrmModule.forFeature([usuario]),
        JwtModule.register({
            secret: 'ACM_APIREST',  // Utiliza una clave más segura y almacénala de forma segura
            signOptions: { expiresIn: '2h' },  // Establece un tiempo de expiración adecuado
          })],
    controllers:[AuthController],
    providers: [AuthService, JwtStrategy],
    exports: [AuthService]
})

export class AuthModule {}