import { Router } from 'express';
import * as productController from '../controllers/productController.js';

const router = Router();

router
  .get('/', productController.getAllProducts)
  .get('/:id', productController.getProductById)
  .post('/', productController.createProduct)
  .put('/:id', productController.updateProduct)
  .delete('/:id', productController.deleteProduct);

export default router;
