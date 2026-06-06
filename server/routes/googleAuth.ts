import { Router } from 'express';
import { googleAuth } from '../controllers/googleAuth.js';

const router = Router();

// POST /api/auth/google
router.post('/', googleAuth);

export default router;
