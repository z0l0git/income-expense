//Imports
import bcrypt from "bcrypt";

//Password Hashing Function
export const makeHash = (password) => {
  const salt = bcrypt.genSaltSync(10);
  const hash = bcrypt.hashSync(password, salt);
  return hash;
};

//Password Comparison Function
export const compareHash = (password, hash) => {
  const compare = bcrypt.compareSync(password, hash);
  return compare;
};
