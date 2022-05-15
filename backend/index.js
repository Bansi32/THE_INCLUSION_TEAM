require('dotenv').config(); 

const express = require('express');
const app = require(express);
require('./helpers/dbConnect');

//const cors = require('cors');
// const cookieParser = require('cookie-parser');
// app.use(cookieParser());
// const corsOpt = {
//     credentials:true,
//     origin: ['http://localhost:3000']
// }

//app.use(cors(corsOpt));
const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(
    bodyParser.urlencoded({
        extended: false,
    })
);
app.get('/', (req, res) => {
    console.log("hi");
})
app.get('/register', async (req, res) => {
    
});

app.post('/register', async(req, res)=> {
    
});
app.listen(5000, () => console.log("ON PORT 5000"));