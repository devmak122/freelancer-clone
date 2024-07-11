  const jwt = require("jsonwebtoken");
  const dotenv = require("dotenv");

  // Load config
  dotenv.config();

  const JWT_SECRET = process.env.JWT_SECRET;

  const fetchuser = async (req, res, next) => {
    const token = req.header("auth-token");
    if (!token) {
      return res.status(401).json({ error: "Token not provided" });
    }
    try {
      const data = jwt.verify(token, JWT_SECRET);
      req.user = data.user;
      next();
    } catch (error) {
      console.error("Error verifying token:", error.message);
      return res.status(401).json({ error: "Invalid or expired token" });
    }
  };

  module.exports = fetchuser;
