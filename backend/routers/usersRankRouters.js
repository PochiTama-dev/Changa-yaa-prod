import { Router } from 'express';
import * as usersRankController from '../controllers/usersRankController.js';

const router = Router();

router
    .get('/', usersRankController.getAllUsersRanks)
    .get('/:id', usersRankController.getUsersRankById)
    .get('/user/:id_user', usersRankController.getUsersRanksByUserId)
    .post('/', usersRankController.createUsersRank)
    .put('/:id', usersRankController.updateUsersRank)
    .delete('/:id', usersRankController.deleteUsersRank);

export default router;
