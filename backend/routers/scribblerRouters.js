import { Router } from 'express';
import * as scribblerController from '../controllers/scribblerController.js';

const router = Router();

router
    .get('/', scribblerController.getAllScribblers)
    .get('/:id', scribblerController.getScribblerById)
    .get('/user/:idUser', scribblerController.getScribblerByIdUser)
    .post('/', scribblerController.createScribbler)
    .put('/:id', scribblerController.updateScribbler)
    .delete('/:id', scribblerController.deleteScribbler);

export default router;
