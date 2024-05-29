import { Request, Response } from "express";
import { Empleado } from '../entity/Empleado';

export const getEmpleado = async (request: Request, res: Response) => {
  try {
    const listaEmpleados = await Empleado.find();
    return res.json(listaEmpleados);
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({ message: error.message });
    }
  }
};

export const createEmpleado = async (req: Request, res: Response) => {
  try {
    //evita que se detenga el servidor cuando falla el request
    console.log(req.body);

    //1.- buscar usuario por id

    //2.- buscar vale por id

    const { nombre, ap_paterno, ap_materno, telefono, usuarioId, valeId } = req.body;
    const empleado = new Empleado();

    empleado.nombre = nombre
    empleado.ap_paterno = ap_paterno
    empleado.ap_materno = ap_materno
    empleado.telefono = telefono
    empleado.usuarioId = usuarioId
    empleado.valeId = valeId

    await empleado.save(); //se pone el await porque la funcion es asincrona
    return res.json(empleado);
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({ message: error.message });
    }
  }
};
