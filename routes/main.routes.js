import { Router } from "express";
import authRouter from "./auth.routes.js";
import userRouter from "./user.routes.js";
import subsriptionRouter from "./subscription.routes.js";

const mainRouter = Router();

mainRouter.use("/auth", authRouter);
mainRouter.use("/users", userRouter);
mainRouter.use("/subscriptions", subsriptionRouter);
export default mainRouter;
