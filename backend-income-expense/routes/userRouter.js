//Imports
import express from "express";
import { createNewUserService } from "../controllers/usersController.js";
import { getLoggedInUserService } from "../controllers/usersController.js";
import { loginUser } from "../middleware/loginUser.js";

//Router declare to variable
const userRouter = express.Router();

//Post Functions
userRouter.post("/users", createNewUserService);
userRouter.post("/users/login", loginUser, getLoggedInUserService);

export default userRouter;
