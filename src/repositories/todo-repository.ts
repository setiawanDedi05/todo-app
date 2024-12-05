import { PrismaClient, Todo } from "@prisma/client";
import { ITodoRepository } from "../interfaces/todo-interface";

export class TodoRepositoryImpl implements ITodoRepository {
  private prisma: PrismaClient;

  constructor(prismaClient: PrismaClient) {
    this.prisma = prismaClient;
  }

  async getTodos(userId: string): Promise<Todo[]> {
    return this.prisma.todo.findMany({
      where: { userId },
    });
  }

  async createTodo(
    userId: string,
    title: string,
    description?: string
  ): Promise<Todo> {
    return this.prisma.todo.create({
      data: {
        title,
        userId,
        status: "uncomplete",
        description: description as string,
      },
    });
  }

  async updateTodo(
    id: string,
    title: string,
    status: string,
    description?: string
  ): Promise<Todo> {
    return this.prisma.todo.update({
      where: {
        id,
      },
      data: {
        title,
        status,
        description,
      },
    });
  }

  async deleteTodo(id: string): Promise<void> {
    this.prisma.todo.delete({
      where: {
        id,
      },
    });
  }
}
