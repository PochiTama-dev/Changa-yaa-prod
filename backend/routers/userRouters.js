import { Router } from "express";
import * as userController from "../controllers/userController.js";
import loginValidator from "../validations/loginValidator.js";
import registerValidator from "../validations/registerValidator.js";
import updateValidator from "../validations/updateValidator.js";
import upload from "../multer/upload.js";
import imageValidator from "../validations/imageValidator.js";

const router = Router();

router
  .get("/", userController.getAllUsers)
  .get("/:id", userController.getUserById)
  .post("/login", loginValidator, userController.validateUser)
  .get("/email/:email", userController.getUserByEmail)
  .post(
    "/",
    upload.fields([{ name: "avatar" }, { name: "front_document" }]),
    userController.createUser
  )
  .put(
    "/:id",
    upload.single("avatar"),
    userController.updateUser
  )
  .delete("/:id", userController.deleteUser);

export default router;
