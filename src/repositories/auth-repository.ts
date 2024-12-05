import { PrismaClient, User } from "@prisma/client";
import { IAuthRepository } from "../interfaces/auth-interface";

export class AuthRepositoryImpl implements IAuthRepository {
  private prisma: PrismaClient;

  constructor(prismaClient: PrismaClient) {
    this.prisma = prismaClient;
  }

  async findByEmail(email: string): Promise<User | null> {
    return await this.prisma.user.findUnique({
      where: {
        email,
      },
    });
  }
}
