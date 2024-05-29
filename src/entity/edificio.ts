import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToMany } from "typeorm";
import { Area } from "./area";

@Entity()

export class Edificio extends BaseEntity{
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    nombre: string

    @Column()
    planta: number

    @Column()
    descripcion: string

    @OneToMany(type => Area, area => area.id_edificio)
    areas: Area[]

    @CreateDateColumn()
    fechaCreado: Date

    @UpdateDateColumn()
    fechaActualizacion: Date


}

