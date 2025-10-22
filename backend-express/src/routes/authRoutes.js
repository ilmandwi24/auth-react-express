const express = require("express");
const { register, login, logout, getUser } = require("../controllers/authController");
const { verifyToken } = require("../middlewares/authMiddleware");

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.post("/logout", logout);
router.get("/profile", verifyToken, getUser);
// router.get("/profile", verifyToken, (req, res) => {
  
//   res.json({ message: "Protected route", user: req.user });
// });

module.exports = router;