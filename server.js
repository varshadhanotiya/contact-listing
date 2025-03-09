const express = require("express");
const errorHandler = require("./middleware/errorHandler");
const connectDB = require("./config/dbConnection");
const dotenv = require("dotenv").config();

connectDB();

const app = express();

const PORT = process.env.PORT || 5000;

//moved in contactRoutes.js
// app.get('/api/contact', (req, res) => {
//     // res.send("get all contacts here");
//     // res.json({message : "get all contacts here"});
//     res.status(200).json({message : "get all contacts here"});
// })

app.use(express.json());

//base url
app.use("/api/contact", require("./routes/contactRoutes"));

app.use(errorHandler);

app.listen(PORT, ()=>{
    console.log(`Server running on PORT ${PORT}`);
})