import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsPositive, IsString } from "class-validator";


export class productoDto{

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
    
    @ApiProperty()
    @IsNotEmpty()
    @IsPositive()
    precio: number;
    
    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    categoríaId: string;
}