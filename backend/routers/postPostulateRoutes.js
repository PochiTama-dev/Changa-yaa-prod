import { Router } from 'express';
import * as postPostulateController from '../controllers/postPostulateController.js';

const router = Router();

router
  .get('/', postPostulateController.getAllPostPostulates)
  .get('/:id', postPostulateController.getPostPostulateById)
  .get('/user/:idPostulate', postPostulateController.getPostPostulateByIdPostulate)
  .get('/post/:idPost', postPostulateController.getPostPostulateByIdPost)
  .post('/', postPostulateController.createPostPostulate)
  .put('/:id', postPostulateController.updatePostPostulate)
  .delete('/:id', postPostulateController.deletePostPostulate);

export default router;
