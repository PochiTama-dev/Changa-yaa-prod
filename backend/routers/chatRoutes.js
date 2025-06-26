import { Router } from 'express';
import * as chatController from '../controllers/chatController.js';
import upload from '../multer/upload.js';

const router = Router();

router
  .get('/', chatController.getAllChats)
  .get('/:id', chatController.getChatById)
  .post('/', upload.single('image_reference'), chatController.createChat)
  .put('/:id', chatController.updateChat)
  .delete('/:id', chatController.deleteChat)
  .patch('/:id/seen', chatController.markChatAsSeen);

export default router;