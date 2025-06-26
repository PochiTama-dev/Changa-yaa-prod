import { Router } from 'express';
import * as usersNetworkController from '../controllers/usersNetworkController.js';

const router = Router();

router
    .get('/', usersNetworkController.getAllUsersNetworks)
    .get('/:id', usersNetworkController.getUsersNetworkById)
    .get('/user/:id_user', usersNetworkController.getUsersNetworksByUserId)
    .post('/', usersNetworkController.createUsersNetwork)
    .put('/:id', usersNetworkController.updateUsersNetwork)
    .delete('/:id', usersNetworkController.deleteUsersNetwork);

export default router;
