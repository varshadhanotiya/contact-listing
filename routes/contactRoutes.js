const express = require("express");
const router = express.Router();

//get
router.route("/").get((req, res) => {
    // res.send("get all contacts here");
    // res.json({message : "get all contacts here"});
    res.status(200).json({message : "get all contacts here"});
});

//post - create
router.route("/").post((req, res) => {
    res.status(200).json({message : "create contacts"});
})

//get contact for particular id
router.route("/:id").get((req, res) => {
    res.status(200).json({message : `get contact for ${req.params.id}`});
})

//update
router.route("/:id").put((req, res) => {
    res.status(200).json({message : `update contact ${req.params.id}`});
})

//delete
router.route("/:id").delete((req, res) => {
    res.status(200).json({message : `delete contact ${req.params.id}`});
})


module.exports = router;