const express = require("express");
const {
  getAllUsers,
  getOneUser,
  lastFiveUsers,
} = require("../../controllers/api/usersApiController");
const router = express.Router();

router.get("/", getAllUsers);
router.get("/lastFiveUsers", lastFiveUsers);
router.get("/:id", getOneUser);

module.exports = router;
