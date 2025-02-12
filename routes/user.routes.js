import { Router } from "express";
import { getUser, getUsers } from "../controllers/user.controller.js";
import authMiddleware from "../middlewares/auth.middleware.js";
const userRouter = Router();

userRouter.get("/", getUsers);

userRouter.get("/:id", authMiddleware, getUser);

// create new user
userRouter.post("/", (req, res) => res.json({ message: "CREATE a User" }));

// update user
userRouter.put("/:id", (req, res) => res.json({ message: "UPDATE a user" }));

// delete user
userRouter.get("/:id", (req, res) => res.json({ message: "DELETE a  user" }));

export default userRouter;
