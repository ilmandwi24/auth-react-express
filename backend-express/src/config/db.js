const mysql = require("mysql2/promise");

const pool = mysql.createPool({
  host: process.env.DB_HOST || "localhost",
  user: process.env.DB_USER || "root",
  password: process.env.DB_PASS || "",
  database: process.env.DB_NAME || "auth_db",
});

async function checkDbConnection() {
  let connection;
  try {
    connection = await pool.getConnection();
    console.log('Database connection successful!');
    return true;
  } catch (error) {
    console.error('Database connection failed:', error.message);
    return false;
  } finally {
    if (connection) {
      connection.release(); // Release the connection back to the pool
    }
  }
}

// Call the function to check the connection
checkDbConnection();
module.exports = pool;