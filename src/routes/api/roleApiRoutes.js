const express = require("express");
const { getAllRoles, getOneRole, createRole, dropRole } = require('../../controllers/api/rolesApiController');
const router = express.Router();

router.get("/all", getAllRoles);
router.get("/:id", getOneRole);
router.post("/create", createRole);
router.delete("/delete", dropRole);

module.exports = router;