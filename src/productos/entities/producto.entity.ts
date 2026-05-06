import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";
import { Categoria } from "src/categorias/entities/categoria.entity";


export class Producto extends Document{

    @Prop({
        required: true,
        unique:true,
        index: true,
    })
    nombre: string;

    @Prop({
        required: true,
        index: true,
    })
    precio: number;

    @Prop({
        required: true,
    })
    stock: number;

    @Prop({
        required: true,
        index: true,
        ref: Categoria.name,
        type: String,
    })
    categoria: string;

    @Prop({
        default:true, 
    })
    activo: boolean;
}

export const ProductoSchema = SchemaFactory.createForClass(Producto);


