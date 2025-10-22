const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const authRoutes = require("./routes/authRoutes");
const app = express();

app.use(express.json());
app.use(cookieParser());

app.use(cors({
  origin: "http://localhost:5173", // ganti dengan URL React kamu
  credentials: true
}));

app.use("/api/auth", authRoutes);
app.use("/home", (req, res) => {
   console.log(`Server running on http://localhost:${process.env.PORT}`);
  res.json({ message: `Welcome to the home page ${process.env.PORT}` });
});
module.exports = app;