import express from "express";
import {see, edit, logout, remove} from "../controllers/userControllers";

const userRouter = express.Router();

userRouter.get("/logout", logout)
userRouter.get("/edit", edit)
userRouter.get("/remove", remove)
userRouter.get("/:id", see)

export default userRouter;