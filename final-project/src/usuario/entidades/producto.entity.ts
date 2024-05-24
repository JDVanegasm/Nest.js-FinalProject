import { Column,
         Entity, 
         JoinColumn, 
         JoinTable, 
         ManyToMany, 
         ManyToOne,  
         PrimaryGeneratedColumn } from "typeorm";
import { Categoria } from "./Categoria.entity";
import { Carrito } from "./Carrito.entity";


@Entity()
export class Producto{
    @PrimaryGeneratedColumn()
    id: string;
    @Column({ type: 'varchar', length: 30})
    nombre: string;
    @Column({ type: 'varchar', length: 120})
    descripcion: string;
    @Column({ type: 'real'})
    precio: number;
    @Column({ type: 'varchar', length: 4})
    categoria: string;
    //Relacion Categirua
    @ManyToOne(() => Categoria, (categoria) => categoria.producto, {
        nullable: false,
        })
    @JoinColumn({ name: 'fk_categoria_producto' })
    fk_categoria_producto: Categoria;

    //Relacion con carrito
    @ManyToMany(() => Carrito, (carrito) => carrito.productos)
    @JoinTable()
    carritos: Carrito[];
}