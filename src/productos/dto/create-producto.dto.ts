import { IsString, IsNumber, Min, IsBoolean, IsMongoId, IsInt, MinLength, IsPositive } from "class-validator";

export class CreateProductoDto {
    @IsString({message:"Debe ser un Stringh"})
    @MinLength(2)
    name: string;

    @IsNumber()
    @IsPositive()
    @Min(1)
    precio: number;

    @IsInt()
    @IsPositive()
    @Min(0)
    stock: number;

    @IsMongoId()
    categoria: string;

    @IsBoolean()
    activo: boolean;
}
