import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsPositive, IsString } from "class-validator";

export class carritoDto{

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    id : string;
    
    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    usuarioId: string;
    
    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    productoId: string;
    
    @ApiProperty()
    @IsNotEmpty()
    @IsPositive()
    cantidad: number;
}