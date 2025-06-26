import { Router } from 'express';
import * as budgetController from '../controllers/budgetController.js';

const router = Router();

router
  .get('/', budgetController.getAllBudgets)
  .get('/:id', budgetController.getBudgetById)
  .post('/', budgetController.createBudget)
  .put('/:id', budgetController.updateBudget)
  .delete('/:id', budgetController.deleteBudget);

export default router;