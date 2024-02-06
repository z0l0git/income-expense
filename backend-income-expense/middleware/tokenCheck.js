import jwt from "jsonwebtoken";

export const tokenCheck = (req, res, next) => {
  //   const { token } = req.headers.authorization;
  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGdtYWlsLmNvbSIsImlhdCI6MTcwNzE5MjQxMiwiZXhwIjoxNzA3Mjc4ODEyfQ.9oe7Cb4rNzuGU_J8ezHSEgzgYJaZybQeALBJ47FLRzQ";

  if (!token) return res.status(401).send("Access denied. No token provided.");
  jwt.verify(token, process.env.JWT_SECRET || "secret", (err, result) => {
    if (err) {
      res.status(401).send("Access denied. Invalid token.");
      return;
    } else {
      next();
      return res.status(200).send(result);
    }
  });
};
