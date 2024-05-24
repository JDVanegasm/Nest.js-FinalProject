import { 
    Column,
    Entity,
    PrimaryGeneratedColumn,
  ManyToOne, JoinColumn,
  OneToOne,
  OneToMany} from 'typeorm';
import { Exclude } from 'class-transformer';
import { Rol } from './rol.entity';
import { Carrito } from './Carrito.entity';
import { Pedido } from './Pedido.entity';


@Entity()
export class usuario {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ type: 'varchar', length: 20})
  cedula: string;
  @Column({ type: 'varchar', length: 50})
  nombre: string;
  @Column({ type: 'varchar', length: 50})
  apellido: string;
  @Column({ type: 'date'})
  fechaNacimiento: Date;
  @Column({ type: 'varchar', length: 15})
  telefono: string;
  @Column({ type: 'varchar', length: 50})
  correo: string;
  @Column({ type: 'varchar', length: 100})
  direccion: string;
  @Exclude()
  @Column({ type: 'varchar', length: 200})
  password: string;
  //Relacion Rol  
   @ManyToOne(() => Rol, (rol) => rol.usuario, {
    nullable: false,
    })
  @JoinColumn({ name: 'fk_rol_user' })
  fk_rol_user: Rol;

  //Relacion con Carrito
  @OneToOne(() => Carrito, carrito => carrito.usuario, { cascade: true })
  @JoinColumn()
  carrito: Carrito;


  //Relacion con pedido
  @OneToMany(() => Pedido, (Pedido) => Pedido.fk_Pedido_user)
  Pedido: Pedido[];
} 