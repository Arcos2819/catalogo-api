import { join } from 'path';
import { Module } from '@nestjs/common';
import { ProductosModule } from './productos/productos.module';
import { CategoriasModule } from './categorias/categorias.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { MongooseModule } from '@nestjs/mongoose';


@Module({
  imports: [ServeStaticModule.forRoot({
    rootPath: join(__dirname, '..', 'public'),
  }),
  MongooseModule.forRoot('mongodb://localhost:27017/catalogoDB'),
  ProductosModule,
  CategoriasModule
]
})
export class AppModule {}
