require('dotenv').config();
const express = require('express');
const cors = require('cors');
const res = require('express/lib/response');
const app = express();
const PORT = process.env.PORT || 3000;


app.use(express.json());
app.use(cors());


const createAccount = require('../routes/createAccount');
const login = require('../routes/login');
const bonPlan = require('../routes/post');

app.use('/createAccount', createAccount);
app.use('/login', login);
app.use('/bonPlans', bonPlan);

app.listen(PORT, ()=> {console.log(`Server listenning on PORT : ${PORT}`)});