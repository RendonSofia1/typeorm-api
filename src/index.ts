import "reflect-metadata"
import app from "./app"
import {AppDataSource} from "./db";

//funcion que arranca todo el proyecto
async function main(){
    try{
        await AppDataSource.initialize();
        console.log('base de datos conectada')
        app.listen(3000);
        console.log('server esta escuchando en el puerto', 3000)
    } catch (error){
        console.error(error);
    }
}

main()