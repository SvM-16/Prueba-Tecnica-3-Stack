import { Router } from 'express';

import { obtenerRoles } from '../controllers/rolesControlles';

const router = Router();

router.gey('/areas', obtenerRoles)

export default router;