import { Router } from 'express';
import * as rankController from '../controllers/rankController.js';

const router = Router();

router
    .get('/', rankController.getAllRanks)
    .get('/:id', rankController.getRankById)
    .post('/', rankController.createRank)
    .put('/:id', rankController.updateRank)
    .delete('/:id', rankController.deleteRank);

export default router;
