let http = require("http")
const express = require("express")


//create a server object:
var app = express();
app.listen(3000, () => {
   console.log(‘Server listening on 3000’);
})