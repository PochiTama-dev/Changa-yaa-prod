import { Router } from 'express';
import * as usersProfessionsController from '../controllers/usersProfessionsController.js';

const router = Router();

router
  .get('/', usersProfessionsController.getAllUsersProfessions)
  .post('/', usersProfessionsController.createUsersProfessions)
  .delete('/:id', usersProfessionsController.deleteUsersProfessions)
  .delete('/user/:idUser', usersProfessionsController.deleteUsersProfessionsByUser)

export default router;