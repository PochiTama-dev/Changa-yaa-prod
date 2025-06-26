import { Router } from 'express';
import * as categoryController from '../controllers/categoryController.js';

const router = Router();

router
  .get('/', categoryController.getAllCategories)
  .get('/:id', categoryController.getCategoryById)
  .post('/', categoryController.createCategory)
  .put('/:id', categoryController.updateCategory)
  .delete('/:id', categoryController.deleteCategory);

export default router;
