const express = require('express');
const cors = require('cors'); 
const connectDB = require('./mongoconn');


const User = require('./model/User');

const app = express();
app.use(express.json());


// Connect to MongoDB
connectDB();

app.use(cors());

app.post('/Signup', async (req, res) => {
    const { name, email, password } = req.body;
    
    const result = await User.create({ name, email, password });

    res.json({
        status:true,
        message: 'User Created Succesfully',
        data: result
    });
});


app.post('/login', async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email, password });
    if(user) {
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


app.listen(3000, () => {
    console.log('Server is running on port 3000');
});