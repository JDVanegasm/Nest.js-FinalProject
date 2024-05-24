import { IsNotEmpty, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
export class crearRolDto {
  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  nombre: string;
}

export class actualizarRolDto extends crearRolDto {}