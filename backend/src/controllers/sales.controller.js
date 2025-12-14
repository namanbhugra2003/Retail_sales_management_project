const { getSales } = require("../services/sales.service.js");

const fetchSales = async (req, res) => {
  try {
    const result = await getSales(req.query);
    res.json(result);
  } catch (error) {
    console.error("Fetch sales error:", error);
    res.status(500).json({ message: "Failed to fetch sales" });
  }
};

module.exports = { fetchSales };
