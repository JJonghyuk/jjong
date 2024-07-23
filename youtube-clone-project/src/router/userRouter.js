import express from "express";
import {
  see, 
  getEdit, 
  postEdit, 
  logout, 
  startGithubLogin, 
  finishGithubLogin, 
  getChangePassword, 
  postChangePassword
} from "../controllers/userControllers";
import { 
  protectorMiddleware, 
  publicOnlyMiddleware,
  avatarUpload,
 } from "../middleware";

const userRouter = express.Router();

userRouter.get("/logout", protectorMiddleware, logout);
userRouter.route("/edit").all(protectorMiddleware).get(getEdit).post(avatarUpload.single("avatarInput"), postEdit);
userRouter.route("/change-password").get(getChangePassword).post(postChangePassword);
userRouter.get("/github/start", publicOnlyMiddleware, startGithubLogin);
userRouter.get("/github/finish", publicOnlyMiddleware, finishGithubLogin);
userRouter.get("/:id", see);

export default userRouter;