import { Router } from "express";
import * as scribblerImageController from "../controllers/scribblerImageController.js";
import upload from "../multer/upload.js";
import { imagesContentValidator } from "../validations/imagesContentValidator.js";

const router = Router();

router
  .get("/", scribblerImageController.getAllScribblerImages)
  .get("/:id", scribblerImageController.getScribblerImageById)
  .post(
    "/",
    upload.array("images"),
    imagesContentValidator,
    scribblerImageController.createScribblerImage
  )
  .put(
    "/:id",
    upload.array("images"),
    imagesContentValidator,
    scribblerImageController.updateScribblerImage
  )
  .delete("/:id", scribblerImageController.deleteScribblerImage);

export default router;
