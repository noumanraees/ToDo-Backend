import { Router } from "express";
import userRoutes from "./user.js";
import taskRoutes from "./task.js";

const router = Router();

router.use("/users", userRoutes);
router.use("/tasks", taskRoutes);

export default router;
