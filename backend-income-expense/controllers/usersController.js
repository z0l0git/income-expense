// Imports
import { createNewUser } from "../queries/user/createUser.js";

//Get Data of logged in user
export const getLoggedInUserService = async (req, res) => {
  try {
    res.status(200);
    res.send(req.Token);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

//Create new user
export const createNewUserService = async (req, res) => {
  try {
    const data = await createNewUser(req);
    res.send(JSON.stringify(data));
  } catch (err) {
    res.status(400).send(err.message);
  }
};
