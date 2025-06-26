import { Router } from 'express';
import * as ratingsTaskController from '../controllers/ratingsTaskController.js';

const router = Router();

router
    .get('/', ratingsTaskController.getAllRatingsTasks)
    .get('/:id', ratingsTaskController.getRatingsTaskById)
    .post('/', ratingsTaskController.createRatingsTask)
    .put('/:id', ratingsTaskController.updateRatingsTask)
    .delete('/:id', ratingsTaskController.deleteRatingsTask);

export default router;
