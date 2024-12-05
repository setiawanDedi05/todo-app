import bcrypt from "bcrypt";
const saltRounds = 10;

export const encryptPassword = (plainPassword: string) => {
  const salt = bcrypt.genSaltSync(saltRounds);
  return bcrypt.hashSync(plainPassword, salt);
};

export const checkPassword = (plainPassword: string, hash: string) => {
  return bcrypt.compareSync(plainPassword, hash);
};
