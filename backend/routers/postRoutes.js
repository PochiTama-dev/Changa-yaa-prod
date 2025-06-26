import { Router } from 'express';
import * as postController from '../controllers/postController.js';

const router = Router();

router
  .get('/', postController.getAllPosts)
  .get('/:id', postController.getPostById)
  .get('/user/:idUser', postController.getPostByIdUser)
  .post('/', postController.createPost)
  .put('/:id', postController.updatePost)
  .delete('/:id', postController.deletePost);

export default router;
