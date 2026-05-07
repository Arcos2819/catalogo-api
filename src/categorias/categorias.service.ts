import {
  BadRequestException,
  ConflictException,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { CreateCategoriaDto } from './dto/create-categoria.dto';
import { UpdateCategoriaDto } from './dto/update-categoria.dto';
import { isValidObjectId, Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Categoria } from './entities/categoria.entity';

@Injectable()
export class CategoriasService {
  constructor(
    @InjectModel(Categoria.name)
    private readonly categoriaModel: Model<Categoria>,
  ) {}

  async create(createCategoriaDto: CreateCategoriaDto) {
    try {
      createCategoriaDto.name = createCategoriaDto.name.toLocaleLowerCase();
      const categoria = await this.categoriaModel.create(createCategoriaDto);
      return categoria;
    } catch (error: any) {
      if (error.code === 11000) {
        throw new ConflictException(
          `Ya existe una categoría con el nombre "${createCategoriaDto.name}"`,
        );
      }
      throw new InternalServerErrorException('Error al crear la categoría');
    }
  }

  async findAll() {
    return this.categoriaModel.find();
  }

  async findOne(id: string) {
    if (!isValidObjectId(id)) {
      throw new BadRequestException(`El id "${id}" no es un ObjectId válido`);
    }
    const categoria = await this.categoriaModel.findById(id);
    if (!categoria) {
      throw new NotFoundException(`La categoría con id ${id} no existe`);
    }
    return categoria;
  }

  async update(id: string, updateCategoriaDto: UpdateCategoriaDto) {
    if (!isValidObjectId(id)) {
      throw new BadRequestException(`El id "${id}" no es un ObjectId válido`);
    }
    if (updateCategoriaDto.name) {
      updateCategoriaDto.name = updateCategoriaDto.name.toLocaleLowerCase();
    }
    try {
      const categoria = await this.categoriaModel.findByIdAndUpdate(
        id,
        updateCategoriaDto,
        { new: true },
      );
      if (!categoria) {
        throw new NotFoundException(`La categoría con id ${id} no existe`);
      }
      return categoria;
    } catch (error: any) {
      if (error instanceof NotFoundException) throw error;
      if (error.code === 11000) {
        throw new ConflictException(
          `Ya existe una categoría con el nombre "${updateCategoriaDto.name}"`,
        );
      }
      throw new InternalServerErrorException('Error al actualizar la categoría');
    }
  }

  async remove(id: string, productoModel: Model<any>) {
    if (!isValidObjectId(id)) {
      throw new BadRequestException(`El id "${id}" no es un ObjectId válido`);
    }
    const categoria = await this.categoriaModel.findById(id);
    if (!categoria) {
      throw new NotFoundException(`La categoría con id ${id} no existe`);
    }
    const productosAsociados = await productoModel.countDocuments({
      categoria: id,
    });
    if (productosAsociados > 0) {
      throw new ConflictException(
        `No se puede eliminar la categoría "${categoria.name}" porque tiene ${productosAsociados} producto(s) asociado(s)`,
      );
    }
    await this.categoriaModel.findByIdAndDelete(id);
    return { message: `Categoría "${categoria.name}" eliminada correctamente` };
  }
}
