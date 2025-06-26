import { Router } from 'express';
import * as certificateController from '../controllers/certificateController.js';
import upload from '../multer/upload.js';
import { imagesValidator } from '../validations/imagesValidator.js';

const router = Router();

router
  .get('/', certificateController.getAllCertificates)
  .get('/:id', certificateController.getCertificateById)
  .get('/user/:idUser', certificateController.getCertificateByIdUser)
  .post('/', upload.array('certificate'), imagesValidator, certificateController.createCertificate)
  .put('/:id', upload.array('images'), imagesValidator, certificateController.updateCertificate)
  .delete('/:id', certificateController.deleteCertificate);

export default router;
