const express = require("express");
const router = express.Router();
const upload = require("../middleware/upload");
const Emergency = require("../model/Emergency.model.js");

// ✅ POST emergency with image
router.post("/", upload.single("carImage"), async (req, res) => {
  try {
    const newEmergency = new Emergency({
      ownerName: req.body.ownerName,
      ownerContact: req.body.ownerContact,
      carNumber: req.body.carNumber,
      carImage: req.file ? "/uploads/" + req.file.filename : "",
      location: req.body.location,
      hospitalName: req.body.hospitalName,
    });

    await newEmergency.save();
    res.status(201).json({ status: true, message: "Emergency car added!" });
  } catch (error) {
    res.status(500).json({ status: false, message: "Error", error });
  }
});

// ✅ NEW: GET route to fetch emergency cars
router.get("/", async (req, res) => {
  try {
    const data = await Emergency.find();
    res.status(200).json({ status: true, data });
  } catch (error) {
    res.status(500).json({ status: false, message: "Failed to fetch data", error });
  }
});

// ✅ DELETE emergency by ID
router.delete("/:id", async (req, res) => {
  try {
    await Emergency.findByIdAndDelete(req.params.id);
    res.status(200).json({ status: true, message: "Deleted successfully" });
  } catch (error) {
    res.status(500).json({ status: false, message: "Failed to delete", error });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const { ownerName, ownerContact, carNumber, location, hospitalName } = req.body;

    const updatedEmergency = await Emergency.findByIdAndUpdate(
      req.params.id,
      {
        ownerName,
        ownerContact,
        carNumber,
        location,
        hospitalName,
      },
      { new: true }
    );

    if (!updatedEmergency) {
      return res.status(404).json({ status: false, message: "Emergency not found" });
    }

    res.status(200).json({ status: true, data: updatedEmergency });
  } catch (error) {
    console.error("Update error:", error);
    res.status(500).json({ status: false, message: "Failed to update", error });
  }
});


module.exports = router;
