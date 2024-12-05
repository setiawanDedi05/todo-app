import { User } from "@prisma/client";

import jwt, { JwtPayload } from "jsonwebtoken";

const secretKey = process.env.SECRET_KEY as string;
/**
 * this function for generate jwt token
    @params user object
    @params secret_key string
    @returns string the return is token jwt
*/
export const generateToken = (user: User): any => {
  const payload = { email: user.email };
  const token = jwt.sign(payload, secretKey, { expiresIn: "1h" });
  return token;
};

export const verifyJwtToken = (token: string) => {
  return jwt.verify(token, secretKey, (err, user) => {
    if (err) throw new Error("Invalid Token");
    if (Date.now() >= ((user as JwtPayload).exp as number) * 1000)
      throw new Error("Token Expired");
    return true;
  });
};
