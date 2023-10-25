import { Router } from "express";

import { obtenerAreas } from "../controllers/areasControlles";

const router = Router();

router.get('/areas', obtenerAreas)

export default router