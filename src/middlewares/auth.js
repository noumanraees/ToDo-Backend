import jwt from "jsonwebtoken";
import { userRepository } from "../repositories/user.js";

export const authenticate = async (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];

  if (!token) {
    return res.status(401).json({
      status: "FAILED",
      message: "Unauthorized",
    });
  }

  try {
    const { userId } = jwt.verify(token, process.env.JWT_SECRET);
    const user = await userRepository.findById(userId);
    req.user = user;
  } catch (error) {
    return res.status(401).json({
      status: "FAILED",
      message: "Unauthorized",
    });
  }
  next();
};
