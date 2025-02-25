const express = require('express');
const cors = require('cors');
const connectDB = require('./mongoconn');
const RentalCar = require('./model/RentalCar');
const User = require('./model/User');
const bodyParser = require('body-parser');


//initialize express app
const app = express();

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

    const result = await User.create({ name, email, password });

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

// Create Rental Car API
app.post("/RentalCar", async (req, res) => {
    try {
        const { image, ownerName, ownerContact, seater, carName, location, carNumber } = req.body;

        if (!image || !ownerName || !ownerContact || !seater || !carName || !location || !carNumber) {
            return res.status(400).json({ success: false, message: "All fields are required" });
        }

        const rentalCar = new RentalCar({
            image,
            ownerName,
            ownerContact,
            seater,
            carName,
            location,
            carNumber
        });

        const savedRentalCar = await rentalCar.save();

        res.status(201).json({
            success: true,
            message: "Rental car added successfully",
            data: savedRentalCar
        });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
});

app.get("/RentalCar", async (req, res) => {
    try {
        const cars = await RentalCar.find();
        res.json(cars);
    } catch (error) {
        res.status(500).send(error.message);
    }
});






app.listen(3000, () => {
    console.log('Server is running on port 3000');
});