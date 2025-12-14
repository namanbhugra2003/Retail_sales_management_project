const Sale = require("../models/Sale.js");

const getSales = async (query) => {
  let filter = {};
  console.log(query)
  /* SEARCH */
  if (query.search) {
    filter.$or = [
      { "Customer Name": { $regex: query.search, $options: "i" } },
      { "Phone Number": { $regex: query.search } },
    ];
  }

  if (query.gender) filter.Gender = query.gender;
  if (query.region) filter["Customer Region"] = query.region;
  if (query.category) filter["Product Category"] = query.category;
  if (query.paymentMethod)
    filter["Payment Method"] = query.paymentMethod;

  if (query.tags) {
    filter.Tags = { $regex: query.tags, $options: "i" };
  }

  if (query.minAge && query.maxAge) {
    filter.Age = {
      $gte: Number(query.minAge),
      $lte: Number(query.maxAge),
    };
  }

  if (query.startDate && query.endDate) {
    filter.Date = {
      $gte: new Date(query.startDate),
      $lte: new Date(query.endDate),
    };
  }

  let sort = {};
  if (query.sortBy === "date") sort.Date = -1;
  if (query.sortBy === "quantity") sort.Quantity = -1;
  if (query.sortBy === "name") sort["Customer Name"] = 1;

  const page = Number(query.page || 1);
  const limit = 10;
  const skip = (page - 1) * limit;
  console.log(filter)
  const [data, total] = await Promise.all([
    Sale.find(filter).sort(sort).skip(skip).limit(limit),
    Sale.countDocuments(filter),
  ]);

  console.log(data)

  return { total, data };
};

module.exports = { getSales };
