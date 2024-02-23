import jwt from "jsonwebtoken";

export const tokenCheck = (req, res, next) => {
  const { token } = req.headers.authorization;

  if (!token) return res.status(401).send("Access denied. No token provided.");
  console.log("from tokenCheck", token);
  jwt.verify(token, process.env.JWT_SECRET || "secret", (err, result) => {
    if (err) {
      res.status(401).send(err.message);
      return res.status(401).send("Invalid token.");
    } else {
      next();
      return res.status(200).send(result);
    }
  });
};
