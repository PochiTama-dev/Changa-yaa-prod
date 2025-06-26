import { Router } from "express";
import * as usersSubscriptionController from "../controllers/usersSubscriptionController.js";

const router = Router();

router
  .get("/", usersSubscriptionController.getAllUsersSubscriptions)
  .get("/:id", usersSubscriptionController.getUsersSubscriptionById)
  .get(
    "/user/:id_user",
    usersSubscriptionController.getUsersSubscriptionsByUserId
  )
  .post("/", usersSubscriptionController.createUsersSubscription)
  .put("/:id", usersSubscriptionController.updateUsersSubscription)
  .delete("/:id", usersSubscriptionController.deleteUsersSubscription)
  .post("/:id/validate", usersSubscriptionController.validateUsersSubscription);

export default router;
