import { Router } from 'express';
import * as notificationController from '../controllers/notificationController.js';

const router = Router();

router
  .get('/', notificationController.getAllNotifications)
  .get('/:id', notificationController.getNotificationById)
  .post('/', notificationController.createNotification)
  .put('/:id', notificationController.updateNotification)
  .delete('/:id', notificationController.deleteNotification);

export default router;
