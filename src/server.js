const express = require('express');
const res = require('express/lib/response');
const app = express();
const PORT = process.env.PORT || 3000;
const db = require('../models/client');

app.use(express.json());

app.listen(PORT, ()=> {console.log(`Server listenning on PORT : ${PORT}`)});

app.get('/getUsers', async (req, res) => {
    const { findAll } = require('../models/agglo');
    res.send(await findAll());
})

// Create new account

app.post('/createAccount', async (req, res) => {
    await db('users').insert(req.body)

    try {
        res.send('Compte créé !');
    } catch(err) {
        console.log(err.message);
    }

});