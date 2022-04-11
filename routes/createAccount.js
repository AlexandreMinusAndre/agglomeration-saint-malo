const express = require('express');
const router = express.Router();
const crypto = require('crypto');

router.post('/', async (req, res) => {
    const { newAccount } = require('../models/account')
    await newAccount({
        "lastname": req.body.lastname,
        "firstname": req.body.firstname,
        "birth_date": req.body.birth_date,
        "email": req.body.email,
        "password": crypto.createHash('sha256').update(req.body.password).digest('hex'),
        "adress": req.body.adress,
        "zipcode": req.body.zipcode,
        "city": req.body.city,
        "phone_number": req.body.phone_number,
        "user_group": req.body.user_group,
        "is_admin": req.body.administrateur,
        "rgpd": req.body.rgpd,
        "society_name": req.body.society_name,
        "society_type": req.body.society_type,
        "society_adress": req.body.society_adress,
        "society_city": req.body.society_city,
        "society_zipcode": req.body.society_zipcode,
        "society_phone_number": req.body.society_phone_number,
        "student_school": req.body.student_school,
        "student_nickname": req.body.student_nickname,
        "student_hobbies": req.body.student_hobbies,
        "compagny_name": req.body.compagny_name,
        "compagny_siret": req.body.compagny_siret,
        "compagny_type": req.body.compagny_type,
        "compagny_adress": req.body.compagny_adress,
        "compagny_city": req.body.compagny_city,
        "compagny_zipcode": req.body.compagny_zipcode,
        "compagny_phone_number": req.body.compagny_phone_number
    });

    try {
        res.send('Compte créé !');
    } catch(err) {
        console.log(err.message);
    }
})

module.exports = router