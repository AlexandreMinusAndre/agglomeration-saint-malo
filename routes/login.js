const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');

router.get('/', async (req, res) => {

    const { login } = require('../models/account')

    const result = await login(req.body.email, req.body.mot_de_passe);
    if(result.length === 0) {
        res.status(404).send('Account not found !')
    } else {
        // const token = jwt.sign(result, 'secretKey');

        res.status(200).send(result);
    }


})

module.exports = router