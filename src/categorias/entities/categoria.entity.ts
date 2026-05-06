import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

export class Categoria extends Document{

    @Prop({
        required: true,
        unique:true,
        index: true,
    })
    nombre: string

    @Prop({
        required: true,
    })
    descripcion: string
}

export const CategoriaSchema = SchemaFactory.createForClass(Categoria);