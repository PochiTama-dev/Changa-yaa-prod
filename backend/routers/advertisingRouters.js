import { Router } from 'express';
import * as advertisingController from '../controllers/advertisingController.js';
import upload from '../multer/upload.js';

const router = Router();

router
  .get('/', advertisingController.getAllAdvertisings)
  .get('/:id', advertisingController.getAdvertisingById)
  .post('/', upload.single('image'), advertisingController.createAdvertising)
  .put('/:id', upload.single('image'), advertisingController.updateAdvertising)
  .delete('/:id', advertisingController.deleteAdvertising)

export default router;