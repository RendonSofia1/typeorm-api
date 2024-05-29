import { Request, Response } from "express";
import { Vale } from "../entity/vale";

export const getVale = async (request: Request, res: Response) => {
  try {
    const listaVales = await Vale.find();
    return res.json(listaVales);
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({ message: error.message });
    }
  }
};

export const createVale = async (req: Request, res: Response) => {
  try {
    //evita que se detenga el servidor cuando falla el request
    console.log(req.body);

    const { num_serie, unidad, modelo, marca } = req.body;
    const vale = new Vale();

    vale.num_serie = num_serie;
    vale.unidad = unidad;
    vale.modelo = modelo;
    vale.marca = marca;

    await vale.save(); //se pone el await porque la funcion es asincrona
    return res.json(vale);
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({ message: error.message });
    }
  }
};
