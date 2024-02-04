// Imports
import express from "express";
import userRouter from "./routes/userRouter.js";
import cors from "cors";

// Constants
const port = 4000;
const app = express();
app.use(express.json());
app.use(cors());

// Routes to use
app.use(userRouter);

// Server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
