import express from "express";
import dotenv from "dotenv";
import mainRouter from "./routes/main.routes.js";
import connectDB from "./config/db.js";
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.json());

// connect to database
connectDB();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/api/v1", mainRouter);
app.listen(PORT, () =>
  console.log(`Server is running on http://localhost:${PORT}`),
);
