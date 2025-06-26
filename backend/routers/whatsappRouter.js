import { Router } from 'express';
import { sendWhatsAppMessage } from '../controllers/whatsappController.js';

const router = Router();

router.post('/send', sendWhatsAppMessage);

export default router;
