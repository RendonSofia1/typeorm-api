import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToOne, JoinColumn } from "typeorm";
import { User } from "./User";
import { Vale } from "./vale";

@Entity()

export class Empleado extends BaseEntity {
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    nombre: string

    @Column()
    ap_paterno: string

    @Column()
    ap_materno: string

    @Column()
    telefono: string

    @OneToOne(() => User)
    @JoinColumn()
    usuarioId: User;

    @OneToOne(() => Vale)
    @JoinColumn()
    valeId: Vale;

    @CreateDateColumn()
    fechaCreado: Date

    @UpdateDateColumn()
    fechaActualizacion: Date
}