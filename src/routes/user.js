import { Router } from "express";
import { userController } from "../controllers/user.js";
import { authenticate } from "../middlewares/auth.js";

const router = Router();

router.post("/login", (req, res) => {
  userController.login(req, res);
});

router.post("/register", (req, res) => {
  userController.register(req, res);
});

router.get("/me", authenticate, (req, res) => {
  userController.me(req, res);
});

export default router;
