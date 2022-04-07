const express = require('express');
const router = express.Router();

router.post('/', async (req, res) => {
    const { newAccount } = require('../models/account')

    await newAccount(req.body);

    try {
        res.send('Compte créé !');
    } catch(err) {
        console.log(err.message);
    }
})

module.exports = router