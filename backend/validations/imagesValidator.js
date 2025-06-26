import fs from 'fs';

const deleteImage = (path) => {
  fs.existsSync(path) && fs.unlinkSync(path);
}

const imagesValidator = (req, res, next) => {
  let errors = [];
  if (req.files.length === 0) {
    errors.push({errorMsg: 'Suba hasta 5 imagenes (.jpg, .jpeg, .png, .webp) tamaño máximo 10 MB cada una.'});
    res.status(201).json(errors);
  } else if (req.files.length > 5) {
    req.files.forEach(file => {
      deleteImage(file.path);    
    });
    errors.push({errorMsg: 'Máximo 5 imagenes (.jpg, .jpeg, .png, .webp) tamaño máximo 10 MB cada una.'});
    res.status(201).json(errors);
  } else {
    req.files.forEach(file => {
      if(!file.originalname.match(/\.(jpg|jpeg|png|webp|pdf)$/)){
        deleteImage(file.path);
        errors.push({
          errorValue: file.originalname,
          errorMsg: 'Sólo imágenes (.jpg, .jpeg, .png, .webp) tamaño máximo 10 MB.'
        });
      } else if (file.size > 1000000 ) {
        deleteImage(file.path);
        errors.push({
          errorValue: file.originalname,
          errorMsg: 'El tamaño máximo de la imagen no puede superar 10 MB.'
        });
      }   
    });
    if (errors.length > 0) {
      res.status(201).json(errors);
    } else {
      next();
    }   
  }
}

export { imagesValidator, deleteImage };