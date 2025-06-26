import { Router } from 'express';
import * as cardController from '../controllers/cardController.js';

const router = Router();

router
  .get('/', cardController.getAllCards)
  .get('/:id', cardController.getCardById)
  .post('/', cardController.createCard)
  .put('/:id', cardController.updateCard)
  .delete('/:id', cardController.deleteCard);

export default router;
