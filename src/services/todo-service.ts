import { Todo } from "@prisma/client";
import { ITodoService } from "../interfaces/todo-interface";
import { TodoRepositoryImpl } from "../repositories/todo-repository";

export class TodoServiceImpl implements ITodoService {
  private repository: TodoRepositoryImpl;

  constructor(todoRepository: TodoRepositoryImpl) {
    this.repository = todoRepository;
  }

  async getTodos(userId: string): Promise<Todo[]> {
    return this.repository.getTodos(userId);
  }

  async createTodo(
    userId: string,
    title: string,
    description: string
  ): Promise<Todo> {
    return this.repository.createTodo(userId, title, description);
  }

  async updateTodo(
    id: string,
    title: string,
    status: string,
    description: string
  ): Promise<Todo> {
    return this.repository.updateTodo(id, title, status, description);
  }

  async deleteTodo(id: string): Promise<void> {
    this.repository.deleteTodo(id);
  }
}
