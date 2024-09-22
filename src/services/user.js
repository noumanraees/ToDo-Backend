import { userRepository } from "../repositories/user.js";
import { loginValidaion, registerValidaion } from "../validations/user.js";
import bcrypt from "bcryptjs";
import { v4 as uuidv4 } from "uuid";
import jwt from "jsonwebtoken";

export const userService = {
  async login(req, res) {
    const { email, password } = req.body;

    const { error } = loginValidaion.validate(req.body);
    if (error) {
      return res.status(400).json({
        status: "FAILED",
        message: error.details[0].message,
      });
    }

    const isUserExist = await userRepository.checkUserWithEmail(email);
    if (!isUserExist) {
      return res.status(400).json({
        status: "FAILED",
        message: "Requested user does not exist",
      });
    }

    const isPasswordValid = await bcrypt.compare(
      password,
      isUserExist.password
    );

    if (!isPasswordValid) {
      return res.status(400).json({
        status: "FAILED",
        message: "Invalid password",
      });
    }

    const jti = uuidv4();

    const token = jwt.sign(
      { userId: isUserExist._id, jti },
      process.env.JWT_SECRET,
      {
        expiresIn: process.env.JWT_EXPIRES_IN,
      }
    );
    res.status(200).json({
      status: "SUCCESS",
      message: "Login successful",
      data: {
        authToken: token,
      },
    });
  },

  async register(req, res) {
    const { email, password, name } = req.body;

    const { error } = registerValidaion.validate(req.body);
    if (error) {
      return res.status(400).json({
        status: "FAILED",
        message: error.details[0].message,
      });
    }

    const isUserExist = await userRepository.checkUserWithEmail(email);
    if (isUserExist) {
      return res.status(400).json({
        status: "FAILED",
        message: "User already exists",
      });
    }

    const newUser = await userRepository.createUser(email, name, password);
    if (!newUser) {
      return res.status(400).json({
        status: "FAILED",
        message: "Failed to create user",
      });
    }

    return res.status(201).json({
      status: "SUCCESS",
      message: "User created successfully",
      data: { id: newUser._id, email: newUser.email },
    });
  },

  async me(req, res) {
    const { name, email } = req.user;

    return res.status(200).json({
      status: "SUCCESS",
      data: { name, email },
    });
  },
};
