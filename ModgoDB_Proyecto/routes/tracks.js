const express = require("express");
const router = express.Router();
const { getItems, getItem, createItem, updateItem, deleteItem } = require("../controllers/tracks.js");

const { validatorCreateItem } = require("../validators/tracks.js");



router.get("/", getItems);
router.get("/:id", getItem);
router.post("/", createItem);
router.put("/", updateItem);
router.delete("/", deleteItem);

router.post("/", validatorCreateItem, createItem);


module.exports = router;