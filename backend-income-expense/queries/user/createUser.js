import { client } from "../../index.js";
import { makeHash } from "../../utils/passwordHash.js";

const userCreate = async (username, email, password) => {
  const createUserQuery = `INSERT INTO users (username, email, password) VALUES ($1, $2, $3 ) RETURNING id`;
  const userId = await client.query(createUserQuery, [
    username,
    email,
    makeHash(password),
  ]);
  return userId;
};

export const createNewUser = async (req, res) => {
  const { username, email: upEmail, password } = req.body;
  const getUserQuery = `SELECT * FROM users`;
  const data = await client.query(getUserQuery);

  try {
    if (data.rows.find(({ email }) => email === upEmail)) {
      return "User already exists";
    }
    const userId = await userCreate(username, upEmail, password);
    // console.log(userId);
    return userId;
  } catch (error) {
    console.log(error);
  }
};

// //Imports
// import fs from "fs";
// import { makeHash } from "../../utils/passwordHash.js";

// //Database
// const userDB = "./models/users.json";
// //Today's date to variable
// const date = new Date();

// // Date Formatting to yyy-mm-dd
// const dateFormatter = Intl.DateTimeFormat("sv-SE");

// //Create new user

// export const createNewUser = async (req, res) => {
//   //Destructuring
//   const { username, email: upEmail, password } = req.body;

//   //Try catch block
//   try {
//     //Check if all fields are filled
//     if (!username || !upEmail || !password) {
//       throw new Error("Please fill all the fields");
//     }

//     //Check if password is at least 5 characters long
//     if (password.length < 5) {
//       console.log("password length");
//       throw new Error("Password must be at least 5 characters long");
//     }

//     //Read user database and put in temporary variable
//     const newUserFile = await fs.readFileSync(userDB, "utf-8");

//     //Check if user already exists
//     const data = JSON.parse(newUserFile);
//     if (data.find(({ email }) => email === upEmail)) {
//       throw new Error("User already exists");
//     }

//     //Push new user to database
//     data.push({
//       username,
//       email: upEmail,
//       password: makeHash(password),
//       createdAt: dateFormatter.format(date),
//     });

//     //Write new user to database
//     await fs.writeFileSync(userDB, JSON.stringify(data));
//     return "User created successfully";
//   } catch (error) {
//     throw new Error(error.message);
//   }
// };
