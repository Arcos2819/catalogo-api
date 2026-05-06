import { Module } from '@nestjs/common';
import { ProductosModule } from './productos/productos.module';
import { CategoriasModule } from './categorias/categorias.module';


@Module({
  imports: [ProductosModule, CategoriasModule]
})
export class AppModule {}
