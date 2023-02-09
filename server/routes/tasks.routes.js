import { Router } from "express";
const router = Router();
import {
  getTask,
  getTasks,
  createTask,
  deleteTask,
  updateTasks,
} from "../controllers/task.controllers.js";
//pedir todos
router.get("/tasks", getTasks  );
//pedir uno
router.get("/tasks/:id", getTask );
//crear uno
router.post("/tasks", createTask );
//actualizar 1
router.put("/tasks/:id", updateTasks );
//eliminar uno
router.delete("/tasks/:id", deleteTask );
export default router;
