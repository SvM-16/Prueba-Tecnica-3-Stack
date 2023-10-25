import { Router } from "express";
import { getEmpleados, createEmpleados, updateEmpleados, deleEmpleados  } from "../controllers/empleadosControllers.js";

const router = Router();

router.get('/empleados', getEmpleados);
router.post('/empleados', createEmpleados);
router.put('/empleados/:id', updateEmpleados);
router.delete('/empleados/:id', deleEmpleados);

export default router;