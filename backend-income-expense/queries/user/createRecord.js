import { client } from "/Users/23LP5833/Desktop/income-expense/backend-income-expense/index.js";

const recordCreate = async (
  ifIncome,
  amount,
  category,
  date,
  time,
  payee,
  note,
  userEmail
) => {
  const createRecordQuery = `INSERT INTO records (ifIncome, amount, category, date, time, payee, note, userEmail) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *`;
  const record = await client.query(createRecordQuery, [
    ifIncome,
    amount,
    category,
    date,
    time,
    payee,
    note,
    userEmail,
  ]);
  return record;
};

export const createNewRecord = async (req, res) => {
  const { ifIncome, amount, category, date, time, payee, note, userEmail } =
    req.body;
  try {
    const record = await recordCreate(
      ifIncome,
      amount,
      category,
      date,
      time,
      payee,
      note,
      userEmail
    );
    return record;
  } catch (err) {
    console.log(err.message);
  }
};
