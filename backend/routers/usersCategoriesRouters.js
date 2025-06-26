import { Router } from 'express';
import * as usersCategoriesController from '../controllers/usersCategoriesController.js';

const router = Router();

router
  .get('/', usersCategoriesController.getAllUsersCategories)
  .post('/', usersCategoriesController.createUsersCategories)
  .delete('/:id', usersCategoriesController.deleteUsersCategories)

export default router;