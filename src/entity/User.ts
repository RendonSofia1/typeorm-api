
import { BaseEntity, Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity() //usar el decorador @Entity
export class User extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    correo: string

    @Column()
    password: string

    @Column({
        default: true //agregar valor por defecto true
    })
    activo: boolean

    @CreateDateColumn()
    fechaCreado: Date

    @UpdateDateColumn()
    fechaActualizacion: Date

}