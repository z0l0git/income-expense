import { client } from "../../index.js";
import jwt from "jsonwebtoken";

// Get LoggedIn User
export const getLoggedInUser = async (req, res) => {
  try {
    const token = req.headers.authorization?.split(" ")[1];
    // console.log("token from getLoggedInUser", token);
    if (!token) return res.status(401).json("Not logged in");

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    const user = await client.query(
      `SELECT * FROM users WHERE email = $1 LIMIT 1`,
      [decoded?.email]
    );

    return user;
  } catch (error) {
    res.redirect("/signup");
    return error.message;
  }
};
