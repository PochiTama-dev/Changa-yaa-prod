import { Router } from "express";
import * as productImageController from "../controllers/productImageController.js";
import upload from "../multer/upload.js";
import { imagesContentValidator } from "../validations/imagesContentValidator.js";

const router = Router();

router
  .get("/", productImageController.getAllProductImages)
  .get("/:id", productImageController.getProductImageById)
  .post(
    "/",
    upload.array("images"),
    imagesContentValidator,
    productImageController.createProductImage
  )
  .put(
    "/:id",
    upload.array("images"),
    imagesContentValidator,
    productImageController.updateProductImage
  )
  .delete("/:id", productImageController.deleteProductImage);

export default router;
