const asyncHandler = require("express-async-handler");
const User = require("../models/userModal");
const bcrypt = require("bcrypt");

// @desc Register the user
//@route POST /api/users/register
//@access public 
const registerUser = asyncHandler(async(req, res) => {
    const {username, email, password} = req.body;
    console.log(req.body);

    if(!username || !email || !password){
        res.status(400);
        throw new error("All fields are mandatory!");
    }
    const userAvailable = await User.findOne({ email });
    if(userAvailable){
        res.status(400);
        throw new error("User already registered!");
    }

    //Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
        username,
        email,
        password : hashedPassword
    });

    if(user){
        res.status(201).json({_id: user.id, email: user.email})
    }else{
        res.status(400);
        throw new error("User data is not valid.");
    }

    res.json({message : "Register the user"})
})


// @desc Login the user
//@route POST /api/users/login
//@access private 
const loginUser = asyncHandler(async(req, res) => {
    res.json({message : "login user"})
})


// @desc Current user
//@route GET /api/users/current
//@access public 
const currentUser = asyncHandler(async(req, res) => {
    res.json({message : "current user"})
})

module.exports = {registerUser, loginUser, currentUser};