
import { DataSource } from "typeorm";
import { User } from "./entity/User";
import { Empleado } from "./entity/Empleado";
import { Edificio } from "./entity/edificio";
import { Area } from "./entity/area";
import { Vale } from "./entity/vale";


// export const AppDataSource = new DataSource ({
//     type: 'postgres',
//     host: 'localhost',
//     username: 'administrador',
//     password: 'administrador',
//     port: 5432,
//     database: 'db_sice',
//     entities: [User, Empleado, Edificio, Area, Vale],
//     logging: true,
//     synchronize: true //lee las entidades y vuelve a crearlas
// })

export const AppDataSource = new DataSource ({
    type: 'postgres',
    host: 'monorail.proxy.rlwy.net',
    username: 'postgres',
    password: 'HPjfEpcSxGxzgTEChbZfKJPVEUmoHNPy',
    port: 43144,
    database: 'railway',
    entities: [User, Empleado, Edificio, Area, Vale],
    logging: true,
    synchronize: true //lee las entidades y vuelve a crearlas
})