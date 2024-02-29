import { client } from "../../index.js";

export const getUserRecords = async (req, res) => {
  const { email } = req.body;
  try {
    const getRecordsQuery = `SELECT * FROM records WHERE userEmail = '${email}'`;
    const records = await client.query(getRecordsQuery);
    return records.rows;
  } catch (error) {
    console.log(error.message);
  }
};
