require('dotenv').config();
const express = require('express');
const res = require('express/lib/response');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

const createAccount = require('../routes/createAccount');
const login = require('../routes/login');
const bonPlan = require('../routes/post');
const createShop = require('../routes/shop');

app.use('/createAccount', createAccount);
app.use('/login', login);
app.use('/bonPlans', bonPlan);
app.use('/createShops', createShop);


app.listen(PORT, ()=> {console.log(`Server listenning on PORT : ${PORT}`)});