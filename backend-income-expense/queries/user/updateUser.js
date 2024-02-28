import { client } from "../../index.js";

export const userUpdate = async (req, res) => {
  const { currency, balance } = req.body;
  const getUserQuery = `SELECT * FROM users`;
  const data = await client.query(getUserQuery);
  const lastUser = data.rows[data.rows.length - 1];
  console.log(data.rows[data.rows.length - 1]);
  const updateUserQuery = `UPDATE users SET currency = $1, balance = $2 WHERE id = ${lastUser.id} RETURNING *`;

  try {
    const userUpd = await client.query(updateUserQuery, [currency, balance]);
    return userUpd;
  } catch (error) {
    console.log(error);
  }
};
