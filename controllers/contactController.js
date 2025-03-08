// @desc Get all contacts
//@route GET /api/contacts
//@access public 

const getContacts = (req, res) => {
    res.status(200).json({message : "get all contacts here"});
}

// @desc Create new contact
//@route GET /api/contacts
//@access public 
const createContact = (req, res) => {
    const {name, email, phone} = req.body;
    console.log("user input is : ", req.body)
    if(!name || !email || !phone){
        res.status(400);
        throw new error("All fields are mandatory !");
    }
    res.status(201).json({message : "create contacts"});
}

//get contact by ID
// @desc Create contact
//@route GET /api/contacts/:id
//@access public 
const getContact = (req, res) => {
    res.status(200).json({message : `get contact for ${req.params.id}`});
}

// @desc Update contact
//@route GET /api/contacts/:id
//@access public 
const updateContact = (req, res) => {
    res.status(200).json({message : `update contact ${req.params.id}`});
}

// @desc Delete contact
//@route GET /api/contacts/:id
//@access public 
const deleteContact = (req, res) => {
    res.status(200).json({message : `delete contact ${req.params.id}`});
}

module.exports = {getContacts, createContact, getContact, updateContact, deleteContact};