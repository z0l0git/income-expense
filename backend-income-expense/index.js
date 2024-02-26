// Imports
//
import userRouter from "./routes/userRouter.js";
import cors from "cors";
import dotenv from "dotenv";

// Constants
// const port = 4000;
// const app = express();
import pg from "pg";
import express from "express";
// Database

const CONNECTION_STRING =
  "postgresql://z0l0git:nFl8HtRyz4De@ep-old-band-a1dgymuq.ap-southeast-1.aws.neon.tech/incomeDB?sslmode=require";

export const client = new pg.Client({
  connectionString: CONNECTION_STRING,
});
const dbInit = async () => {
  await client.connect();
  await createUserTable();
  console.log("Connected to database");
};
dbInit();

client.on("error", async (error, cl) => {
  if (error) {
    await client.connect();
  }
});

const createUserTable = async () => {
  const userTableCreateQuery = `CREATE TABLE IF NOT EXISTS users (
        id SERIAL PRIMARY KEY,
        username TEXT NOT NULL,
        email TEXT NOT NULL,
        password TEXT NOT NULL,
        currency TEXT,
        balance INTEGER,
        created_at TIMESTAMP NOT NULL DEFAULT NOW()
        );`;

  const result = await client.query(userTableCreateQuery);
};

const app = express();
app.use(express.json());
dotenv.config();

app.get("", async (req, res) => {
  res.send("Working Fine");
});

app.listen(4000, () => {
  console.log("Server is running on port 4000");
});

// Middlewares
// app.use(express.json());
app.use(cors());

// Routes to use
app.use(userRouter);
