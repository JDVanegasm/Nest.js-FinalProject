import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Producto } from "./producto.entity";


@Entity()
export class Categoria{
    @PrimaryGeneratedColumn()
    id: string;
    @Column({type: 'varchar', length:30})
    nombre: string;
    @Column({type:'varchar',length:120})
    descripcion:string;

    //Relacion con Producto
    @ManyToOne(() => Producto, (producto) => producto.fk_categoria_producto)
    producto: Producto[];
}