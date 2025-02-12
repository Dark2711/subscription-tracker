import { User } from "../models/user.model.js";
import jwt from "jsonwebtoken";
const authMiddleware = async (req, res, next) => {
  try {
    const token = req.headers["authorization"]?.split(" ")[1]; // Bearer token
    if (!token) return res.status(403).send("Token is required");
    const verify = jwt.verify(token, process.env.JWT_SECRET);
    if (!verify) {
      return res.status(401).json({ message: "Invalid Token" });
    }
    const user = await User.findById(verify.userId);
    if (!user) {
      return res.status(401).json({
        message: "Unauthorized",
      });
    }
    req.user = user;
    req.userId = verify.userId;
    next();
  } catch (error) {
    console.error("Error in auth middleware:", error);
    return res.status(500).json({
      message: "Internal Server Error",
    });
  }
};

export default authMiddleware;
