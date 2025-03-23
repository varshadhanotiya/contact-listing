const asyncHandler = require("express-async-handler");

// @desc Register the user
//@route POST /api/users/register
//@access public 
const registerUser = asyncHandler(async(req, res) => {
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