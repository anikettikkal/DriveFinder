const mongoose = require("mongoose");

const rentalCarSchema = new mongoose.Schema({
  CarImage: { type: String, required: true },
  carname: { type: String, required: true },
  OwnerName: { type: String, required: true },
  contactNumber: { type: String, required: true },
  CarNumber: { type: String, required: true, unique: true },
  seater: { type: Number, required: true },
  location: { type: String, required: true }
});

module.exports = mongoose.model("RentalCar", rentalCarSchema);
