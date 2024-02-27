// Imports
import { createNewUser } from "../queries/user/createUser.js";
import { getLoggedInUser } from "../queries/user/getLoggedInUser.js";
import { userUpdate } from "../queries/user/updateUser.js";
import { createNewRecord } from "../queries/user/createRecord.js";

//Create record

export const createRecordService = async (req, res) => {
  try {
    const data = await createNewRecord(req);
    res.send(JSON.stringify(data));
  } catch (err) {
    res.status(400).send(err.message);
  }
};

//Get Data of logged in user
export const getLoggedInUserService = async (req, res) => {
  try {
    res.status(200);
    await res.send(req.Token);
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

export const getRefreshTokenService = async (req, res) => {
  try {
    const user = await getLoggedInUser(req, res);
    res.status(200).send(user.rows[0]);
  } catch (error) {
    res.status(400).send(err.message);
  }
};

export const updateUserService = async (req, res) => {
  try {
    const data = await userUpdate(req);
    res.status(200).send(JSON.stringify(data));
  } catch (error) {
    res.status(400).send(err.message);
  }
};
