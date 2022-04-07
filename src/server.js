const express = require('express');
const res = require('express/lib/response');
const app = express();
const PORT = process.env.PORT || 3000;


app.use(express.json());

const createAccount = require('../routes/createAccount');
const login = require('../routes/login');

app.use('/createAccount', createAccount);
app.use('/login', login);


app.listen(PORT, ()=> {console.log(`Server listenning on PORT : ${PORT}`)});