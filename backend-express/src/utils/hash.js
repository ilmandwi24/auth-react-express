const bcrypt = require("bcryptjs");

const hashPassword = async (password) => {
  console.log("hashPassword---");
  const salt = await bcrypt.genSalt(10);
  return await bcrypt.hash(password, salt);
};

const comparePassword = async (password, hash) => {
  return await bcrypt.compare(password, hash);
};

module.exports = { hashPassword, comparePassword };
