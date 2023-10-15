//Basic lib project import
const express = require('express');
const app = express();
const router = require('./src/routes/api');
const bodyParser = require('body-parser');




//Security Middleware lib import
const rateLimit=require('express-rate-limit');
const helmet = require('helmet');
const mongoSanitize = require('express-mongo-sanitize');
const xss = require('xss-clean');
const hpp = require('hpp');
const cors = require('cors');



//Database lib import
const mongoose = require('mongoose');
 //Security middleware implement
 app.use(cors());
 app.use(helmet());
 app.use(mongoSanitize());
 app.use(xss());
 app.use(hpp())
 //Body parser implement
 app.use(bodyParser.json());
 //Request Rate limit
 const limiter = rateLimit({windowms:15*60*1000,max:3000});
 //app.use(limiter());
//Create Route
app.use("/api",router);
 module.exports = app;