import { Router } from "express";

import { getAreas } from "../controllers/areasControlles.js";

const router = Router();

router.get('/areas', getAreas)

export default router;