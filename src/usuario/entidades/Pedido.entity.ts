import { Column, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { usuario } from "./usuario.entity";



@Entity()
export class Pedido{
    @PrimaryGeneratedColumn()
    id: string;
    @Column({type:'varchar',length:30})
    usuarioId: string;
    @Column({type:'real'})
    total: number;
    @Column({type:'boolean'})
    estado: boolean;
    @Column({type:'date'})
    fechaCreacion: string

    //Relacion con usuario
    @ManyToOne(() => usuario, (usuario) => usuario.Pedido, {
        nullable: false,
        })
      @JoinColumn({ name: 'fk_Pedido_user' })
      fk_Pedido_user: usuario;
}
