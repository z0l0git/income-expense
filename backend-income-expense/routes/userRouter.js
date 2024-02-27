//Imports
import express from "express";
import {
  getRefreshTokenService,
  updateUserService,
} from "../controllers/usersController.js";
import { createNewUserService } from "../controllers/usersController.js";
import { getLoggedInUserService } from "../controllers/usersController.js";
import { loginUser } from "../middleware/loginUser.js";
import { tokenCheck } from "../middleware/tokenCheck.js";
import { createRecordService } from "../controllers/usersController.js";

//Router declare to variable
const userRouter = express.Router();

//Post Functions
userRouter.post("/users", createNewUserService);
userRouter.post("/users/login", loginUser, getLoggedInUserService);
userRouter.get("/users/refresh", getRefreshTokenService);
userRouter.post("/users/update", updateUserService);
userRouter.post("/record/create", createRecordService);

//Get Functions
userRouter.get("/users/me", tokenCheck);

export default userRouter;
