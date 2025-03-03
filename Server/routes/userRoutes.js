const express = require("express");
const router = express.Router();
const User = require("../model/User");

router.post('/Signup', async (req, res) => {
    const { name, email, password } = req.body;

    const result = await User.create({ name, email, password,role: 'user' });

    res.json({
        status: true,
        message: 'User Created Succesfully',
        data: result
    });
});




//api for login

router.post('/login', async (req, res) => {
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

module.exports = router;