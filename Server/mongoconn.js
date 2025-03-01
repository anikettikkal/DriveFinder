const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();


connectDB = async () => {
        await mongoose.connect(process.env.MONGODB_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('Connected to MongoDB');
}

module.exports = connectDB;