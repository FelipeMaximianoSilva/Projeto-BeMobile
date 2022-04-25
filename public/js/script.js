import dotenv from "dotenv";
import jwt from "jsonwebtoken";

dotenv.config();

export const verifyJWT = (req, res, next) => {
  const token = req.query["x-access-token"];
  if (!token)
    return res.status(401).json({ auth: false, message: "No token provided." });

  jwt.verify(token, process.env.SECRET, function (err, decoded) {
    if (err)
      return res
        .status(500)
        .json({ auth: false, message: "Failed to authenticate token." });

    req.userId = decoded.id;
    next();
  });
};