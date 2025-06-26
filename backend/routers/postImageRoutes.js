import { Router } from "express";
import * as postImageController from "../controllers/postImageController.js";
import upload from "../multer/upload.js";
import { imagesContentValidator } from "../validations/imagesContentValidator.js";

const router = Router();

router
  .get("/", postImageController.getAllPostImages)
  .get("/:id", postImageController.getPostImageById)
  .post(
    "/",
    upload.array("images"),
    imagesContentValidator,
    postImageController.createPostImage
  )
  .put(
    "/:id",
    upload.array("images"),
    imagesContentValidator,
    postImageController.updatePostImage
  )
  .delete("/:id", postImageController.deletePostImage);

export default router;
