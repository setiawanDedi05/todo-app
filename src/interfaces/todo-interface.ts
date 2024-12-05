import { Todo } from "@prisma/client";
import { Request, Response } from 'express';

export interface ITodoRepository {
  getTodos(userId: string): Promise<Todo[]>;
  createTodo(
    userId: string,
    title: string,
    description?: string
  ): Promise<Todo>;
  updateTodo(
    id: string,
    title: string,
    status: string,
    description?: string
  ): Promise<Todo>;
  deleteTodo(id: string): Promise<void>;
}

export interface ITodoService {
  getTodos(userId: string): Promise<Todo[]>;
  createTodo(userId: string, title: string, description: string): Promise<Todo>;
  updateTodo(
    id: string,
    title: string,
    status: string,
    description: string
  ): Promise<Todo>;
  deleteTodo(id: string): Promise<void>;
}

export interface ITodoController {
  getTodos(req: Request, res: Response): Promise<void>;
  createTodo(req: Request, res: Response): Promise<void>;
  updateTodo(req: Request, res: Response): Promise<void>;
  deleteTodo(req: Request, res: Response): Promise<void>;
}

