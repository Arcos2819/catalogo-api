import { IsString, MaxLength, IsOptional, MinLength } from 'class-validator';

export class CreateCategoriaDto {
  @IsString({ message: 'El nombre debe ser un texto' })
  @MinLength(2, { message: 'El nombre debe tener al menos 2 caracteres' })
  @MaxLength(100, { message: 'El nombre no puede exceder 100 caracteres' })
  name: string;

  @IsString({ message: 'La descripción debe ser un texto' })
  @MaxLength(200, { message: 'La descripción no puede exceder 200 caracteres' })
  @IsOptional()
  descripcion?: string;
}
