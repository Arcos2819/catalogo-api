import { Injectable } from '@nestjs/common';
import { CreateProductoDto } from './dto/create-producto.dto';
import { UpdateProductoDto } from './dto/update-producto.dto';
import { Producto } from './entities/producto.entity';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';


@Injectable()
export class ProductosService {
  constructor(
    @InjectModel(Producto.name)
    private readonly productoModel: Model<Producto>,
  ) {}


  async create(createProductoDto: CreateProductoDto) {
    createProductoDto.name = createProductoDto.name.toLocaleLowerCase();

    const producto = await this.productoModel.create(createProductoDto);
    
    return producto; 
  }

  findAll() {
    return `This action returns all productos`;
  }

  findOne(id: number) {
    return `This action returns a #${id} producto`;
  }

  update(id: number, updateProductoDto: UpdateProductoDto) {
    return `This action updates a #${id} producto`;
  }

  remove(id: number) {
    return `This action removes a #${id} producto`;
  }
}
