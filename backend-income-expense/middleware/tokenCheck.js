import jwt from "jsonwebtoken";

export const tokenCheck = (req, res, next) => {
  //   const { token } = req.headers.authorization;
  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InVzZXIxQGdtYWlsLmNvbSIsImlhdCI6MTcwNzE5MzMzMCwiZXhwIjoxNzA3Mjc5NzMwfQ.c7g4UU7m6KYWSPjYWSyxi2FaIXnOc6dOgvaSw49qkJk";

  if (!token) return res.status(401).send("Access denied. No token provided.");
  jwt.verify(token, process.env.JWT_SECRET || "secret", (err, result) => {
    if (err) {
      res.status(401).send(err.message);
      return;
    } else {
      next();
      return res.status(200).send(result);
    }
  });
};
