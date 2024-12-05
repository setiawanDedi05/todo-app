import { IAuthService } from "../interfaces/auth-interface";
import { AuthRepositoryImpl } from "../repositories/auth-repository";
import { checkPassword } from "../utils/bcrypt";
import jwt from "jsonwebtoken";
import { generateToken, verifyJwtToken } from "../utils/jwt";

export class AuthServiceImpl implements IAuthService {
  private repository: AuthRepositoryImpl;

  constructor(authRepository: AuthRepositoryImpl) {
    this.repository = authRepository;
  }

  async login(email: string, password: string): Promise<string> {
    const userFinded = await this.repository.findByEmail(email);
    if (!userFinded) throw new Error("user not found");
    if (checkPassword(password, userFinded.password)) {
      return generateToken(userFinded);
    }
    throw new Error("invalid credentials");
  }

  verifyToken(token: string) {
    try {
      return verifyJwtToken(token);
    } catch (error) {
      throw new Error("invalid token");
    }
  }

  logout(token: string) {
    throw new Error("Method not implemented.");
  }
}
