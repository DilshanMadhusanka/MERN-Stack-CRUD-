const express = require("express");
const mongoose = require("mongoose");
const bodyparser = require("bodyparser");
const cors = require("cors");
const dotenv = require("dotenv");
const app = express();


const PORT = process.env.PORT || 8070;

app.use(cors());
app.use(bodyparser.json());

const URL =process.env.MONGODB_URL;

mongoose.connect(URL ,{
    useCreateIndex : true,
    useNewUrlParser : true ,
    useUnifiedTopologyL :true,
    useFindAndModify : false
});

const connection = mongoose.connection;