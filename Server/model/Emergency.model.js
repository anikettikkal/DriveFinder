const mongoose = require("mongoose");

const emergencySchema = new mongoose.Schema({
  ownerName: String,
  ownerContact: String,
  carNumber: String,
  carImage: String,
  location: String,
  hospitalName: String,
});

module.exports = mongoose.model("Emergency", emergencySchema);
