const express = require("express");
const router = express.Router();
const { fetchSales } = require("../controllers/sales.controller.js");

router.get("/", fetchSales);

module.exports = router;
