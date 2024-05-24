import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";



export class categoriaDto {
    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    id : string;
    
    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    nombre: string;
    
    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    descripcion: string;
}