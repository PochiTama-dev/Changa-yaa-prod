import { Router } from 'express';
import * as subscriptionController from '../controllers/subscriptionController.js';

const router = Router();

router
    .get('/', subscriptionController.getAllSubscriptions)
    .get('/:id', subscriptionController.getSubscriptionById)
    .post('/', subscriptionController.createSubscription)
    .put('/:id', subscriptionController.updateSubscription)
    .delete('/:id', subscriptionController.deleteSubscription);

export default router;
