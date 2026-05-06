import { IsString, MaxLength, IsOptional, MinLength } from "class-validator";

export class CreateCategoriaDto {

    @IsString({message:"Debe ser un Stringh"})
    @MinLength(2)
    name:string
    
    @IsString({message:"Debe ser un Stringh"})
    @MaxLength(200)
    @IsOptional()
    descripcion:string
}
