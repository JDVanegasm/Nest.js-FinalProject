import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class crearLoginDto {

  @IsNotEmpty()
  @IsEmail()
  correo: string;

  @IsNotEmpty()
  @IsString()
  password: string;

}
