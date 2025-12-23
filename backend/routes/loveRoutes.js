const express = require("express");
const {
  getLoveData,
  updateLoveData,
  saveProposalAnswer,
} = require("../controllers/loveController");

const router = express.Router();

/**
 * Password middleware
 */
const adminAuth = (req, res, next) => {
  const password = req.headers.password;
  if (password !== process.env.ADMIN_PASSWORD) {
    return res.status(401).json({ message: "Unauthorized" });
  }
  next();
};

/**
 * Public route
 */
router.get("/", getLoveData);

/**
 * Admin routes
 */
router.post("/", adminAuth, updateLoveData);
router.post("/proposal", adminAuth, saveProposalAnswer);

module.exports = router;
