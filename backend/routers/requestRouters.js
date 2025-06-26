import { Router } from 'express';
import * as requestController from '../controllers/requestController.js';

const router = Router();

router
    .get('/', requestController.getAllRequests)
    .get('/:id', requestController.getRequestById)
    .get('/user/contracting/:idContractingUser', requestController.getRequestByIdContractingUser)
    .get('/user/contracted/:idContractedUser', requestController.getRequestByIdContractedUser)
    .post('/', requestController.createRequest)
    .put('/:id', requestController.updateRequest)
    .delete('/:id', requestController.deleteRequest);

export default router;
