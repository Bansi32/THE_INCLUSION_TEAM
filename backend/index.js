require('dotenv').config(); 

const express = require('express');
const app = require(express);
const router = require('./routes');
//const cors = require('cors');
// const cookieParser = require('cookie-parser');
// app.use(cookieParser());
// const corsOpt = {
//     credentials:true,
//     origin: ['http://localhost:3000']
// }

//app.use(cors(corsOpt));
require('./helpers/dbConnect');
app.get('/', (req, res) => {
    console.log("hi");
})

app.listen(5000, () => console.log("ON PORT 5000"));