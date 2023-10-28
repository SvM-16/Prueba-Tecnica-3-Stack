import { Router } from 'express';

import { getRoles } from '../controllers/rolesControlles.js';

const router = Router();

router.get('/roles', getRoles)

export default router;