import { Router } from 'express';
import * as usersNotificationController from '../controllers/usersNotificationController.js';

const router = Router();

router
    .get('/', usersNotificationController.getAllUsersNotifications)
    .get('/:id', usersNotificationController.getUsersNotificationById)
    .get('/user/:id_user', usersNotificationController.getUsersNotificationsByUserId)
    .post('/', usersNotificationController.createUsersNotification)
    .put('/:id', usersNotificationController.updateUsersNotification)
    .delete('/:id', usersNotificationController.deleteUsersNotification);

export default router;
