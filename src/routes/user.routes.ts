import { Router } from "express";
import { getUser, createUser } from '../controllers/user.controller';
import { createVale, getVale } from "../controllers/vale.controller";
import { createEmpleado, getEmpleado } from "../controllers/empleado.controller";


const router = Router()

router.get('/users', getUser)
router.post('/users', createUser)

router.get('/vales', getVale)
router.post('/vales', createVale)

router.get('/empleados', getEmpleado)
router.post('/empleados', createEmpleado)

export default router