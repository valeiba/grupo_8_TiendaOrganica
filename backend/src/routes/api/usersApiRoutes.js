const express = require("express");
const {
  getAllUsers,
  getOneUser
} = require("../../controllers/api/usersApiController");
const router = express.Router();

router.get("/", getAllUsers);
router.get("/:id", getOneUser);

module.exports = router;
