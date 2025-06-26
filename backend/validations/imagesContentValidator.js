import { validateImageContent } from "../services/imageProcessingService.js";
import fs from "fs";

const deleteImage = (path) => {
  fs.existsSync(path) && fs.unlinkSync(path);
};

const imagesContentValidator = async (req, res, next) => {
  let errors = [];
  req.invalidImages = [];

  if (req.files.length === 0) {
    errors.push({
      errorMsg:
        "Suba hasta 5 imagenes (.jpg, .jpeg, .png, .webp) tamaño máximo 10 MB cada una.",
    });
    return res.status(400).json(errors);
  } else if (req.files.length > 5) {
    req.files.forEach((file) => {
      deleteImage(file.path);
    });
    errors.push({
      errorMsg:
        "Máximo 5 imagenes (.jpg, .jpeg, .png, .webp) tamaño máximo 10 MB cada una.",
    });
    return res.status(400).json(errors);
  } else {
    for (const file of req.files) {
      if (!file.originalname.match(/\.(jpg|jpeg|png|webp|pdf)$/)) {
        deleteImage(file.path);
        errors.push({
          errorValue: file.originalname,
          errorMsg:
            "Sólo imágenes (.jpg, .jpeg, .png, .webp) tamaño máximo 10 MB.",
        });
      } else if (file.size > 10000000) {
        // 10 MB
        deleteImage(file.path);
        errors.push({
          errorValue: file.originalname,
          errorMsg: "El tamaño máximo de la imagen no puede superar 10 MB.",
        });
      } else {
        const isValid = await validateImageContent(file.path);
        if (!isValid) {
          deleteImage(file.path);
          req.invalidImages.push(file.path);
          errors.push({
            errorValue: file.originalname,
            errorMsg: "La imagen contiene contenido prohibido.",
          });
        }
      }
    }

    if (errors.length > 0) {
      return res.status(400).json(errors);
    } else {
      next();
    }
  }
};

export { imagesContentValidator, deleteImage };
