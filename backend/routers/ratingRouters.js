import { Router } from 'express';
import * as ratingController from '../controllers/ratingController.js';

const router = Router();

router
    .get('/', ratingController.getAllRatings)
    .get('/:id', ratingController.getRatingById)
    .get('/user/:id_contracted_user', ratingController.getRatingByContractedUser)
    .post('/', ratingController.createRating)
    .put('/:id', ratingController.updateRating)
    .delete('/:id', ratingController.deleteRating);

export default router;
