const express = require("express");
const router = express.Router();
const multer = require("multer");
const Trip = require("../model/Trip.model");

// 🧾 Multer config
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads"); // Ensure that the "uploads" folder exists
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname); // Store with a unique name
  },
});

const upload = multer({ storage: storage });

// ➕ Add Trip
router.post("/add", upload.single("busImage"), async (req, res) => {
  try {
    const newTrip = new Trip({
      bustype: req.body.bustype,
      seater: req.body.seater,
      ownername: req.body.ownername,
      busname: req.body.busname,
      busnumber: req.body.busnumber,
      busimage: req.file ? req.file.filename : null, // Ensure file is present
      ownercontact: req.body.ownercontact,
      location: req.body.location,
    });

    await newTrip.save();
    res.status(200).json({ message: "Trip added successfully" });
  } catch (error) {
    console.error("Error adding trip:", error);
    res.status(500).json({ error: "Failed to add trip" });
  }
});

// 📥 Get All Trips
router.get("/", async (req, res) => {
  try {
    const trips = await Trip.find();
    const tripsWithImagePath = trips.map((trip) => ({
      ...trip._doc,
      busimage: `/uploads/${trip.busimage}`, // Return full path
    }));
    res.status(200).json(tripsWithImagePath);
  } catch (error) {
    res.status(400).json({ error: "Failed to fetch trips" });
  }
});

// 🗑️ Delete Trip
router.delete("/:id", async (req, res) => {
  try {
    await Trip.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Trip deleted successfully" });
  } catch (error) {
    res.status(400).json({ error: "Failed to delete trip" });
  }
});

// ✏️ Update Trip
router.put("/:id", upload.single("busImage"), async (req, res) => {
  try {
    const updatedData = {
      bustype: req.body.bustype,
      seater: req.body.seater,
      ownername: req.body.ownername,
      busname: req.body.busname,
      busnumber: req.body.busnumber,
      ownercontact: req.body.ownercontact,
      location: req.body.location,
    };

    if (req.file) {
      updatedData.busimage = req.file.filename;
    }

    await Trip.findByIdAndUpdate(req.params.id, updatedData);
    res.status(200).json({ message: "Trip updated successfully" });
  } catch (error) {
    res.status(500).json({ error: "Failed to update trip" });
  }
});

module.exports = router;
