import { Router } from 'express';
import * as authController from '../controllers/authController.js';

const router = Router();

router.post('/solicitar-recuperacion', authController.requestPasswordReset);
router.post('/verificar-codigo', authController.verifyOTP);
router.post('/cambiar-contrasena', authController.resetPassword);

export default router;
