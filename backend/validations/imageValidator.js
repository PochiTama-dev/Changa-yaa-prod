import { deleteImage } from '../validations/imagesValidator.js';

const imageValidator = (req, res, next) => {
  if (req.file !== undefined) {
    if(!req.file.originalname.match(/\.(jpg|jpeg|png|webp|pdf)$/)){
      deleteImage(req.file.path);
      res.status(201).json({
        errorValue: req.file.originalname,
        errorMsg: 'Sólo imágenes (.jpg, .jpeg, .png, .webp, .pdf) tamaño máximo 10 MB.'
      });
    } else if (req.file.size > 1000000 ) {
      deleteImage(req.file.path);
      res.status(201).json({
        errorValue: req.file.originalname,
        errorMsg: 'El tamaño máximo de la imagen no puede superar 10 MB.'
      });
    }   
  }
  next();
}

export default imageValidator;