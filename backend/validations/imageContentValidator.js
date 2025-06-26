import { validateImageContent } from "../services/imageProcessingService.js";
import fs from "fs";

const deleteImage = (path) => {
  fs.existsSync(path) && fs.unlinkSync(path);
};

const imageContentValidator = (fieldName) => {
  return async (req, res, next) => {
    try {
      console.log("Validando contenido de la imagen...");
      console.log("Archivos recibidos:", req.files, req.file);

      req.invalidImages = [];
      let errors = [];

      if (req.files && req.files[fieldName]) {
        for (const file of req.files[fieldName]) {
          const isValid = await validateImageContent(file.path);
          if (!isValid) {
            console.log("Imagen no válida:", file.path);
            deleteImage(file.path);
            req.invalidImages.push(file.path);
            errors.push({
              errorValue: file.originalname,
              errorMsg: "La imagen contiene contenido prohibido.",
            });
          }
        }
      } else if (req.file && req.file.fieldname === fieldName) {
        const isValid = await validateImageContent(req.file.path);
        if (!isValid) {
          console.log("Imagen no válida:", req.file.path);
          deleteImage(req.file.path);
          req.invalidImages.push(req.file.path);
          errors.push({
            errorValue: req.file.originalname,
            errorMsg: "La imagen contiene contenido prohibido.",
          });
        }
      }

      if (errors.length > 0) {
        return res.status(400).json(errors);
      } else {
        next();
      }
    } catch (error) {
      res
        .status(500)
        .json({ message: "Error al validar el contenido de la imagen", error });
    }
  };
};

export default imageContentValidator;
