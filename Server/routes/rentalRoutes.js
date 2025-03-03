const express = require("express");
const router = express.Router();
const RentalCar = require("../model/RentalCar"); 
// 🚀 API: Add a Rental Car
router.post("/Rentalcar", async (req, res) => {
    try {
      const { CarImage, carname, OwnerName, contactNumber, CarNumber, seater, location } = req.body;
  
      const newCar = await RentalCar.create({
        CarImage,
        carname,
        OwnerName,
        contactNumber,
        CarNumber,
        seater,
        location
      });
  
      res.json({ status: true, message: "Car Added Successfully", data: newCar });
    } catch (error) {
      res.status(500).json({ status: false, message: "Error Adding Car" });
    }
  });
  
  // 🚀 API: Get All Rental Cars
  router.get("/Rentalcar", async (req, res) => {
    try {
      const cars = await RentalCar.find();
      res.json({ status: true, data: cars });
    } catch (error) {
      res.status(500).json({ status: false, message: "Error Fetching Cars" });
    }
  });
  
  // 🚀 API: Update a Rental Car
  router.put("/RentalCar/:id", async (req, res) => {
    try {
      const updatedCar = await RentalCar.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (!updatedCar) {
        return res.status(404).json({ status: false, message: "Car not found" });
      }
      res.json({ status: true, message: "Car updated successfully", data: updatedCar });
    } catch (error) {
      console.error("Error updating car:", error);
      res.status(500).json({ status: false, message: "Server error" });
    }
  });
  
  
  // 🚀 API: Delete a Rental Car
  router.delete("/Rentalcar/:id", async (req, res) => {
    try {
      const deletedCar = await RentalCar.findByIdAndDelete(req.params.id);
  
      if (!deletedCar) {
        return res.status(404).json({ status: false, message: "Car Not Found" });
      }
  
      res.json({ status: true, message: "Car Deleted Successfully" });
    } catch (error) {
      res.status(500).json({ status: false, message: "Error Deleting Car" });
    }
  });

module.exports = router;