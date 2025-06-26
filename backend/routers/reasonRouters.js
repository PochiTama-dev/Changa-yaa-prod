import { Router } from 'express';
import * as reasonController from '../controllers/reasonController.js';

const router = Router();

router
    .get('/', reasonController.getAllReasons)
    .get('/:id', reasonController.getReasonById)
    .get('/stars/:stars', reasonController.getReasonByStar)
    .post('/', reasonController.createReason)
    .put('/:id', reasonController.updateReason)
    .delete('/:id', reasonController.deleteReason);

export default router;
