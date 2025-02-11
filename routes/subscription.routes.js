import { Router } from "express";

const subsriptionRouter = Router();

subsriptionRouter.get("/", (req, res) =>
  res.json({ message: "GET all subscriptions" }),
);

subsriptionRouter.get("/:id", (req, res) =>
  res.json({ message: "GET subscription details" }),
);

subsriptionRouter.post("/", (req, res) =>
  res.json({ message: "CREATE a subscription" }),
);

subsriptionRouter.put("/", (req, res) =>
  res.json({ message: "UPDATE a subscription" }),
);

subsriptionRouter.delete("/", (req, res) =>
  res.json({ message: "DELETE a subscription" }),
);

subsriptionRouter.get("/", (req, res) =>
  res.json({ message: "GET all subscriptions" }),
);

subsriptionRouter.get("/user/:id", (req, res) =>
  res.json({ message: "GET all user subscriptions" }),
);

subsriptionRouter.put("/:id/cancel", (req, res) =>
  res.json({ message: "CANCEL a subscription" }),
);

subsriptionRouter.get("/upcoming-renewals", (req, res) =>
  res.json({ message: "GET upcoming renewals" }),
);

export default subsriptionRouter;
