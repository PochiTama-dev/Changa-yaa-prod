import { Router } from 'express';
import * as professionController from '../controllers/professionController.js';

const router = Router();

router
  .get('/', professionController.getAllProfessions)
  .get('/:id', professionController.getProfessionById)
  .post('/', professionController.createProfession)
  .put('/:id', professionController.updateProfession)
  .delete('/:id', professionController.deleteProfession);

export default router;
