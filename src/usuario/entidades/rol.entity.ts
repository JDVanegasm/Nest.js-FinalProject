import { 
    Column,
    Entity,
    JoinColumn,
    ManyToOne,
    OneToMany,
    PrimaryGeneratedColumn,} from 'typeorm';
import { Exclude } from 'class-transformer';
import { usuario } from './usuario.entity';

@Entity()
export class Rol {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ type: 'varchar', length: 50})
  nombre: string;
   //Relaciones
   @OneToMany(() => usuario, (usuario) => usuario.fk_rol_user)
   usuario: usuario[];
}