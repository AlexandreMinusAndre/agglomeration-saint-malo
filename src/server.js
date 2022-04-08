require('dotenv').config();
const express = require('express');
const res = require('express/lib/response');
const app = express();
const PORT = process.env.PORT || 3000;

const db = require('../models/client');

app.use(express.json());

const createAccount = require('../routes/createAccount');
const login = require('../routes/login');

app.use('/createAccount', createAccount);
app.use('/login', login);

app.post("/bonPlans", async (req, res) => {

    try {
        res.send('Annonce créée !');
    } catch(err) {
        console.log(err.message);
    }
});


app.listen(PORT, ()=> {console.log(`Server listenning on PORT : ${PORT}`)});