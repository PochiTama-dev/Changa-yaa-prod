import { Router } from 'express';
import { recoverPassword } from '../controllers/recoverPasswordController.js';

const router = Router();

router.get('/:email', recoverPassword);

export default router;
