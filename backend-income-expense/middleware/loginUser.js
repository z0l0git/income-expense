import fs from "fs";

// const userDB = "./models/users.json";
import { compareHash } from "../utils/passwordHash.js";
import { client } from "../index.js";

const getUserQuery = async (email) => {
  const loginUserQuery = `SELECT * FROM users WHERE email = $1`;
  const user = await client.query(loginUserQuery, [email]);
  console.log(user.rows);
  return user.rows[0];
};

export const loginUser = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    if (!email || !password) {
      res.status(400).send("Please provide email and password");
    }
    if (email === "" || password === "") {
      res.status(400).send("Please provide email and password");
    }
    const user = await getUserQuery(email);

    if (!user) {
      res.status(400).send("Invalid email or password");
    }

    const checkPassword = compareHash(password, user.password);

    if (!checkPassword) {
      res.status(400).send("Invalid email or password");
    }

    req.user = user;

    next();
    return;
  } catch (error) {
    res.send(error.message);
  }
};

/* SELECT * FROM users WHERE (email) VALUES ($1) */
