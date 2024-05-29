import { Request, Response } from "express";
import { User} from '../entity/User';

export const getUser = async (request: Request, res: Response) => {
  try {
    const listaUsers = await User.find();
    return res.json(listaUsers);
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({ message: error.message });
    }
  }
};






export const createUser = async (req: Request, res: Response) => {
    try { //evita que se detenga el servidor cuando falla el request
        console.log(req.body)

        const {correo, password} = req.body
        const user = new User()
        // user.nombre = nombre;
        // user.ap_paterno = ap_paterno
        // user.ap_materno = ap_materno

        user.correo = correo
        user.password = password

        await user.save() //se pone el await porque la funcion es asincrona
        return res.json(user)

      } catch (error) {
        if (error instanceof Error) {
          return res.status(500).json({ message: error.message });
        }
      }
}


// export const updateUser = async (request: Request, res: Response) => {
// }