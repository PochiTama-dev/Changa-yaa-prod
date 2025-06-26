import { Router } from 'express';
import * as criminalRecordController from '../controllers/criminalRecordController.js';
import upload from '../multer/upload.js';
import imageValidator from '../validations/imageValidator.js';

const router = Router();

router
  .get('/', criminalRecordController.getAllCriminalRecords)
  .get('/:id', criminalRecordController.getCriminalRecordById)
  .post('/', upload.array('criminal_record'),  criminalRecordController.createCriminalRecord)
  .put('/:id', upload.single('criminal_record'), imageValidator, criminalRecordController.updateCriminalRecord)
  .delete('/:id', criminalRecordController.deleteCriminalRecord);

export default router;
