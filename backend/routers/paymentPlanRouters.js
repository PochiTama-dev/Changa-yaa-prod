import { Router } from 'express';
import * as paymentPlanController from '../controllers/paymentPlanController.js';
import upload from '../multer/upload.js';

const router = Router();

router
  .get('/', paymentPlanController.getAllPaymentPlans)
  .get('/:id', paymentPlanController.getPaymentPlanById)
  .post('/', upload.single('icon'), paymentPlanController.createPaymentPlan)
  .put('/:id', upload.single('icon'), paymentPlanController.updatePaymentPlan)
  .delete('/:id', paymentPlanController.deletePaymentPlan)

export default router;