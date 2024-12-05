import express, { Router } from "express";
import { TodoControllerImpl } from "../controllers/todo-controller";

export const todoRoutes = (todoController: TodoControllerImpl): Router => {
  const router = express.Router();

  router.get("/", (req, res) => todoController.getTodos(req, res));
  router.post("/", (req, res) => todoController.createTodo(req, res));
  router.put("/:id", (req, res) => todoController.updateTodo(req, res));
  router.delete("/:id", (req, res) => todoController.deleteTodo(req, res));

  return router;
};
