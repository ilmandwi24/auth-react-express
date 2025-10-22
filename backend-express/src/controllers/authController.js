const jwt = require("jsonwebtoken");
const { hashPassword, comparePassword } = require("../utils/hash");
const { createUser, findUserByEmail, getUserByEmail } = require("../models/userModel");

const register = async (req, res) => {
  const { email, password, name } = req.body;

  if (!name || !email || !password)
    return res.status(400).json({ message: "All fields are required" });

  // findUserByEmail(email, async (err, results) => {

  //   if (err) return res.status(500).json({ message: "Database error" });
  //   if (results.length > 0)
  //     return res.status(400).json({ message: "Email already registered" });

  //   const hashedPassword = await hashPassword(password);
  //   console.log("haspowrd")
  //   createUser(name, email, hashedPassword, (err) => {
  //     if (err) return res.status(500).json({ message: "Register failed" });
  //     res.status(201).json({ message: "User registered successfully" });
  //   });
  // });

  const user = await findUserByEmail(email);
  if (user.length > 0) {
    // console.log('User found:', user[0]);
    return res.status(400).json({ message: "Email already registered" });
  } else {
    const hashedPassword = await hashPassword(password);
    try {
      const result = await createUser(name, email, hashedPassword);
      // console.log('User created with ID:', result.insertId);
      res.status(201).json({ message: "User registered successfully" });
    } catch (error) {
       console.error('Error creating user:', error);
      return res.status(500).json({ message: "Register failed" });
     
    }


  }
};

const login = async(req, res) => {
  const { email, password } = req.body;

  if (!email || !password)
    return res.status(400).json({ message: "All fields are required" });

  try {
    // Query database dengan async/await
    const results = await findUserByEmail(email);
    // console.log(results);
    if (results.length === 0) {
      return res.status(404).json({ message: "Email or password is incorrect" });
    }

    const user = results[0];

    // Bandingkan password
    const match = await comparePassword(password, user.password);
    if (!match) {
      return res.status(401).json({ message: "Email or password is incorrect" });
    }

    // Generate JWT
    const token = jwt.sign(
      { name: user.name, email: user.email },
      process.env.JWT_SECRET || supersecretkey,
      { expiresIn: "1d" }
    );

     res.cookie("token", token, {
    httpOnly: true,
    secure: false, // ubah ke true kalau pakai https
    sameSite: "lax",
    maxAge: 24 * 60 * 60 * 1000, // 1 hari
  });

    res.json({ message: "Login successful"});
  } catch (err) {
    console.error("Login error:", err);
    res.status(500).json({ message: "Database error" });
  }
};

const logout = (req, res) => {
  res.clearCookie("token");
  res.json({ message: "Logged out" });
};

const getUser = async (req, res) => {
  console.log(req.user.email);
  const user = await getUserByEmail(req.user.email);
  res.json(user);
};
module.exports = { register, login, logout, getUser };
