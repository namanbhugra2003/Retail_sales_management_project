const mongoose = require("mongoose");

const SaleSchema = new mongoose.Schema(
  {
    "Transaction ID": Number,
    Date: Date,
    "Customer ID": String,
    "Customer Name": String,
    "Phone Number": Number,
    Gender: String,
    Age: Number,
    "Customer Region": String,
    "Product Category": String,
    "Payment Method": String,
    Tags: String,
    Quantity: Number,
  },
  { collection: "sales" }
);

module.exports = mongoose.model("Sale", SaleSchema);
