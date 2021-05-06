const express = require('express')

// Connect database 
const mongoose = require('mongoose');
mongoose.connect('URL', () => {
   console.log('Connected to Mongo DB Successfully!!');
})

//create a server object:
var app = express();
app.listen(3000, () => {
   console.log(`Server listening on 3000`);
})