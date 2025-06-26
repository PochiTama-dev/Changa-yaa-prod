import { Router } from 'express';
import * as roleController from '../controllers/roleController.js';

const router = Router();

router
  .get('/', roleController.getAllRoles)
  .get('/:id', roleController.getRoleById)
  .post('/', roleController.createRole)
  .put('/:id', roleController.updateRole)
  .delete('/:id', roleController.deleteRole);

export default router;
