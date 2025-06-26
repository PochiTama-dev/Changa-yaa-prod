import { Router } from 'express';
import * as requestsImageController from '../controllers/requestsImageController.js';
import upload from '../multer/upload.js';
import { imagesValidator } from '../validations/imagesValidator.js';

const router = Router();

router
    .get('/', requestsImageController.getAllRequestsImages)
    .get('/:id', requestsImageController.getRequestsImageById)
    .post('/', upload.array('images'), imagesValidator, requestsImageController.createRequestsImage)
    .put('/:id', upload.array('images'), imagesValidator, requestsImageController.updateRequestsImage)
    .delete('/:id', requestsImageController.deleteRequestsImage);

export default router;
