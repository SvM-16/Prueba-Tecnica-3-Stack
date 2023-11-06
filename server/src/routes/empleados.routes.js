import { Router } from "express";
import { createEmpleado, getEmpleados, getEmpleadoId, updateEmpleado, deleteEmpleado} from "../controllers/empleadosControllers.js";
// import { validateSchema } from "../middleware/validator.middleware.js";
// import { crearEmpleado } from "../schema/empleados.schema.js";

const router = Router();

router.get('/empleado',getEmpleados);
router.get('/empleados/:id',getEmpleadoId);
router.post('/empleados', createEmpleado);
router.put('/empleados/:id',updateEmpleado);
router.delete('/empleados/:id',deleteEmpleado);

export default router;