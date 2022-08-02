const express = require("express");
const {
  getAllCategories,
  getOneCategory,
  createCategory,
  dropCategory,
} = require("../../controllers/api/categoriesApiController");
const router = express.Router();

router.get("/all", getAllCategories);
router.get("/:id", getOneCategory);
router.post("/create", createCategory);
router.delete("/delete", dropCategory);

module.exports = router;
