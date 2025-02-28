const express = require('express');
const cors = require('cors');
const connectDB = require('./mongoconn');
const User = require('./model/User');
const bodyParser = require('body-parser');
const RentalCar = require('./model/RentalCar');





//initialize express app
const app = express();
app.use(cors({
  origin: "https://drivefinder.onrender.com",
  methods: ["GET", "POST", "PUT", "DELETE"]
}));
//middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());


// Connect to MongoDB
connectDB();

app.use(cors());
app.use(cors({ origin: 'http://localhost:5173', credentials: true }));


//api for signup

app.post('/Signup', async (req, res) => {
    const { name, email, password } = req.body;

    const result = await User.create({ name, email, password,role: 'user' });

    res.json({
        status: true,
        message: 'User Created Succesfully',
        data: result
    });
});




//api for login

app.post('/login', async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email, password });
    if (user) {
        res.json({
            status: true,
            message: 'User Found',
            data: user
        });
    } else {
        res.json({
            status: false,
            message: 'User Not Found'
        });
    }
});

// 🚀 API: Add a Rental Car
app.post("/Rentalcar", async (req, res) => {
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
  app.get("/Rentalcar", async (req, res) => {
    try {
      const cars = await RentalCar.find();
      res.json({ status: true, data: cars });
    } catch (error) {
      res.status(500).json({ status: false, message: "Error Fetching Cars" });
    }
  });
  
  // 🚀 API: Update a Rental Car
  app.put("/RentalCar/:id", async (req, res) => {
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
  app.delete("/Rentalcar/:id", async (req, res) => {
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




app.listen(3000, () => {
    console.log('Server is running on port 3000');
});