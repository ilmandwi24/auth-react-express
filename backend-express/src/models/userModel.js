const db = require("../config/db");

const createUser = async (name, email, hashedPassword) => {
  const sql = 'INSERT INTO users (name, email, password) VALUES (?, ?, ?)';
  const [result] = await db.query(sql, [name, email, hashedPassword]);
  return result;
};

const findUserByEmail = async (email) => {
  const sql = 'SELECT * FROM users WHERE email = ?';
  const [rows] = await db.query(sql, [email]);
  // console.log(rows);
  return rows;
};

const getUserByEmail = async (email) => {
  const sql = 'SELECT email, name FROM users WHERE email = ?';
  const [rows] = await db.query(sql, [email]);
  return rows[0];
};

module.exports = { createUser, findUserByEmail, getUserByEmail};