import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { Producto } from "./producto.entity";
import { Carrito } from "./carrito.entity";

@Entity()
export class CarritoProducto {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'int' })
    cantidad: number;

    @ManyToOne(() => Producto, producto => producto.carritos)
    producto: Producto;

    @ManyToOne(() => Carrito, carrito => carrito.productos)
    carrito: Carrito;
}