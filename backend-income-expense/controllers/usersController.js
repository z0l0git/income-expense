import { createNewUser } from "../queries/user/createUser.js";

//Get user by Email

export const getLoggedInUserService = async (req, res) => {
  try {
    res.status(200);
    res.send(req.userData);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

//Create user

export const createNewUserService = async (req, res) => {
  try {
    const user = await createNewUser(req);
    res.send(JSON.stringify(user));
  } catch (err) {
    res.status(500).send(err.message);
  }
};
