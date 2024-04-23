const path = require('path');
const express = require('express');
const router = express.Router();

exports.getContacts = (req, res, next) => {
    res.render('contactus'); // Render the CONTACT.EJS file
};

exports.postContacts = (req, res, next) => {
    console.log(req.body);
    res.redirect('/success'); // Redirect to the /success route
};
