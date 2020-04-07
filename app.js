const express = require("express");
const app = express();


const yearRoute = require('./api/routes/year');
 

app.use('/year', yearRoute);
module.exports = app;