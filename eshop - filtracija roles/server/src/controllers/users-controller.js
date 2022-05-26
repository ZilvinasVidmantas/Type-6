import database from '../database/index.js';

export const getUsers = (req, res) => {
  const DB = JSON.parse(JSON.stringify(database.data));

  const users = DB.users;
  res.status(200).json(users);
}
