const mongoose = require("mongoose");

const emergencySchema = new mongoose.Schema({
  ownerName: { type: String, required: true },
  ownerContact: { type: String, required: true },
  carNumber: { type: String, required: true },
  carImage: { type: String },
  location: { type: String, required: true },
  hospitalName: { type: String, required: true },
});

const Emergency = mongoose.model("Emergency", emergencySchema);
module.exports = Emergency;
