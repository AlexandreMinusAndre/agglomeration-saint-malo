const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const crypto = require('crypto');


router.get('/', async (req, res) => {

    const { login } = require('../models/account')

    const result = await login(req.body.email, crypto.createHash('sha256').update(req.body.password).digest('hex'));
    if(result.length === 0) {
        res.status(404).send('Account not found !')
    } else {
        const token = jwt.sign(result[0], "secretkey");

        res.status(200).send(token);
    }


})

module.exports = router