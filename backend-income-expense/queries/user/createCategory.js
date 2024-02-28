import { client } from "../../index.js";

const categoryCreate = async (category, icon) => {
  const createCategoryQuery = `
        INSERT INTO category (category, icon)
        VALUES ($1, $2)
        RETURNING *;
    `;
  const catResult = await client.query(createCategoryQuery, [category, icon]);
  return catResult;
};

export const createCategory = async (req, res) => {
  const { category, icon } = req.body;
  try {
    const result = await categoryCreate(category, icon);
    return result;
  } catch (err) {
    console.log(err.message);
  }
};
