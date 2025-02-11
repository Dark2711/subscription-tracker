import { Router } from "express";

const userRouter = Router();

// get all users

userRouter.get("/", (req, res) => res.json({ message: "GET all Users" }));

// get specific user
userRouter.get("/:id", (req, res) =>
  res.json({ message: "GET a specific User" }),
);

// create new user
userRouter.post("/", (req, res) => res.json({ message: "CREATE a User" }));

// update user
userRouter.put("/:id", (req, res) => res.json({ message: "UPDATE a user" }));

// delete user
userRouter.get("/:id", (req, res) => res.json({ message: "DELETE a  user" }));

export default userRouter;
