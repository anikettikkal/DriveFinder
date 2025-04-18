const express = require('express');
const cors = require('cors');
const connectDB = require('./mongoconn');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/userRoutes');
const rentalRoutes = require('./routes/rentalRoutes');
const emergencyRoutes = require('./routes/emergencyRoutes');
const path = require("path");







//initialize express app
const app = express();
// app.use(cors({
//   origin: "https://drivefinder.onrender.com",
//   methods: ["GET", "POST", "PUT", "DELETE"]
// }));
//middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());


// Connect to MongoDB
connectDB();

app.use(cors());
app.use(cors({ origin: 'http://localhost:5173', credentials: true }));




//routes
app.use('/api/users', userRoutes);
app.use('/api/rentalcar', rentalRoutes);
app.use("/api/emergency", emergencyRoutes);
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

      

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});