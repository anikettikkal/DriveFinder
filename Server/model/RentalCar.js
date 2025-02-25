const Schema = require('mongoose').Schema;
const mongoose = require('mongoose');

const rentalCarSchema = new mongoose.Schema({
    image: { type: String, required: true }, // Store image URL or path
    ownerName: { type: String, required: true },
    ownerContact: { type: String, required: true },
    seater: { type: Number, required: true },
    carName: { type: String, required: true },
    location: { type: String, required: true },
    carNumber: { type: String, required: true, match: /^[A-Z]{2}\d{2}[A-Z]{1,2}\d{4}$/ } // Example: MH12AB1234
  });
  
  module.exports = mongoose.model('RentalCar', rentalCarSchema);