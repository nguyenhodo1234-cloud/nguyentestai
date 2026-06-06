import { Router } from 'express';
import { facebookAuth } from '../controllers/facebookAuth.js';

const router = Router();

// POST /api/auth/facebook
router.post('/', facebookAuth);

export default router;
