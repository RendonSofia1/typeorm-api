import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne, JoinColumn } from "typeorm";
import { Edificio } from "./edificio";


@Entity()


export class Area extends BaseEntity{
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    nombre: string

    @Column()
    planta: number

    @Column()
    descripcion: string

    @ManyToOne(() => Edificio, (edificio)=>edificio.id)
    id_edificio: Edificio

    @CreateDateColumn()
    fechaCreado: Date

    @UpdateDateColumn()
    fechaActualizacion: Date


}