import { IsBoolean, IsDate, IsEmail, IsNotEmpty, IsString } from 'class-validator';
import {  PartialType } from '@nestjs/swagger';
import { Transform, TransformFnParams } from 'class-transformer';
import { Rol } from '../entidades/rol.entity';
import { ApiProperty } from '@nestjs/swagger';

function stringToDate({ value }: TransformFnParams) {
  return new Date(value);
}


export class crearUsuarioDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  cedula: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  nombre: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  apellido: string;

  @ApiProperty()
  @IsNotEmpty()
  @Transform(stringToDate)
  fechaNacimiento: Date;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  telefono: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  direccion: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsEmail() 
  correo: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  password: string;

  @ApiProperty()
 @IsNotEmpty()
  fk_rol_user: Rol

}

export class actualizarUsuarioDto extends PartialType(crearUsuarioDto) {}