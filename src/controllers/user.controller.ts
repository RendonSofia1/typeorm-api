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


export const updateUser = async (req: Request, res: Response) => {
 
  try {
      const { id } = req.params

      const user = await User.findBy({ id: parseInt(req.params.id) })

      if (!user)
          return res.status(404).json({ message: "El usuario no existe" })

      await User.update({ id: parseInt(id) }, req.body)

      res.sendStatus(204)
  } catch (error) {
      if (error instanceof Error)
          return res.status(500).json({ message: error.message })
  }

}

export const deleteUser = async (req: Request, res: Response) => {

  try {
      const id = req.params.id

      const result = await User.delete({ id: parseInt(id) })

      if (result.affected == 0) {
          res.status(404).json({ message: "Usuario no encontrado" })
      }

      return res.sendStatus(204)
  } catch (error) {
      if (error instanceof Error)
          return res.status(500).json({ message: error.message })
  }

}