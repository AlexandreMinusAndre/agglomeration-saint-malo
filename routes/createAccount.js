const express = require('express');
const router = express.Router();
const crypto = require('crypto');

router.post('/', async (req, res) => {
    const { newAccount } = require('../models/account')
    console.log(req.body);
    await newAccount({
        "lastname": req.body.lastname,
        "firstname": req.body.firstname,
        "password": crypto.createHash('sha256').update(req.body.password).digest('hex'),
        "email": req.body.email,
        "member_group": req.body.member_group,
        "school": req.body.school,
        "phone": req.body.phone,
        "adresse": req.body.adresse,
        "city": req.body.city,
        "zipcode": req.body.zipcode,
        "rgpd": req.body.rgpd
    });

    try {
        res.send('Compte créé !');
    } catch(err) {
        console.log(err.message);
    }
})

module.exports = router