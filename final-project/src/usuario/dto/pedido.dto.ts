import { ApiProperty } from "@nestjs/swagger";
import { IsDateString, IsNotEmpty, IsPositive, IsString } from "class-validator";

export class pedidoDto{


    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    id: string;
    
    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    usuarioId: string;
    
    @ApiProperty()
    @IsNotEmpty()
    @IsPositive()
    total: number;
    
    
    @ApiProperty()
    @IsNotEmpty()
    estado: boolean; //Aqui true sera que el estado es completado y false que esta pendiente
    
    
    @ApiProperty()
    @IsDateString()
    @IsNotEmpty()
    fechaCreacion: string;
}