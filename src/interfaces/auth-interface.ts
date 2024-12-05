import { User } from "@prisma/client";

export interface IAuthRepository {
  findByEmail(email: string): Promise<User | null>;
}

export interface IAuthService {
  login(email: string, password: string): Promise<string>;
  verifyToken(token: string): any;
  logout(token: string): any;
}
