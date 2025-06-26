import { Router } from 'express';
import * as networkController from '../controllers/networkController.js';

const router = Router();

router
  .get('/', networkController.getAllNetworks)
  .get('/:id', networkController.getNetworkById)
  .post('/', networkController.createNetwork)
  .put('/:id', networkController.updateNetwork)
  .delete('/:id', networkController.deleteNetwork);

export default router;
