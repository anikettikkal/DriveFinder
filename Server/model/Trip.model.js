const mongoose = require("mongoose");

const tripSchema = new mongoose.Schema({
  bustype: String,
  seater: String,
  ownername: String,
  busname: String,
  busnumber: String,
  busimage: String, // image filename
  ownercontact: String,
  location: String,
});

module.exports = mongoose.model("Trip", tripSchema);
