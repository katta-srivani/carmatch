const mongoose = require("mongoose");

const carSchema = new mongoose.Schema({
  name: String,
  brand: String,
  price: Number,
  fuelType: String,
  familyType: String,
  usage: String,
  strengths: [String],
  pros: [String],
  cons: [String],
  imageUrl: String
},
{timestamps : true}
);

module.exports = mongoose.model("Car", carSchema);