const express = require('express');
const res = require('express/lib/response');
const app = express();
const PORT = process.env.PORT || 3000;
const db = require('../models/client');

app.use(express.json());

app.listen(PORT, ()=> {console.log(`Server listenning on PORT : ${PORT}`)});

// Create new account

app.post('/createAccount', async (req, res) => {

    await db('users').insert(req.body)

    try {
        res.send('Compte créé !');
    } catch(err) {
        console.log(err.message);
    }

});

// Login to account

app.get('/login', async (req, res) => {
    //1 On recherche le compte à partir du body de la requête et on compare avec ce qu'il y a dans la db

    const isAccount = await db('users').where({
        email: req.body.email,
        mot_de_passe: req.body.mot_de_passe
      }).select('*');

    if(!isAccount) {
        res.status(404).send('Account not found !')
    } else {
        res.status(200).send('Welcome to your account !');
    }

    //2 Si le compte y est, on créer un json web token

    //3 Si le compte n'y est pas, on affiche un message d'erreur
})