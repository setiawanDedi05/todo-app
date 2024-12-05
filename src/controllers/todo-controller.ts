import { Request, Response } from "express";
import { TodoServiceImpl } from "../services/todo-service";
import { ITodoController } from "../interfaces/todo-interface";

export class TodoControllerImpl implements ITodoController {
  private service: TodoServiceImpl;

  constructor(todoService: TodoServiceImpl) {
    this.service = todoService;
  }

  async getTodos(req: Request, res: Response) {
    const { userId } = req.query;
    try {
      const todos = await this.service.getTodos(userId as string);
      res.status(200).json(todos);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch todos" });
    }
  }

  async createTodo(req: Request, res: Response): Promise<void> {
    const { userId, title, description } = req.body;
    try {
      const todo = await this.service.createTodo(userId, title, description);
      res.status(201).json(todo);
    } catch (error) {
      res.status(500).json({ message: "Failed to create todo" });
    }
  }

  async updateTodo(req: Request, res: Response): Promise<void> {
    const { id } = req.params;
    const { title, description, status } = req.body;
    try {
      const todo = await this.service.updateTodo(
        id,
        title,
        status,
        description
      );
      res.status(200).json(todo);
    } catch (error) {
      console.log({ error });
      res.status(500).json({ message: "Failed to update todo" });
    }
  }

  async deleteTodo(req: Request, res: Response): Promise<void> {
    const { id } = req.params;
    try {
      await this.service.deleteTodo(id);
      res.status(200).json({ message: "Success Delete todo" });
    } catch (error) {
      res.status(500).json({ message: "Failed to delete todo" });
    }
  }
}
