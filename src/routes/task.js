import { Router } from "express";
import { taskController } from "../controllers/task.js";
import { authenticate } from "../middlewares/auth.js";

const router = Router();

router.post("/create", authenticate, (req, res) => {
  taskController.createTask(req, res);
});
router.get("/list", authenticate, (req, res) => {
  taskController.listTask(req, res);
});
router.post("/update/:id", authenticate, (req, res) => {
  taskController.updateTask(req, res);
});
router.post("/delete", authenticate, (req, res) => {
  taskController.deleteTask(req, res);
});

export default router;
