const express = require('express');
const router = express.Router();
const crypto = require('crypto');

router.post('/', async (req, res) => {
    const { newAccount } = require('../models/account')

    await newAccount({
        "nom": req.body.nom,
        "prenom": req.body.prenom,
        "mot_de_passe": crypto.createHash('sha256').update(req.body.mot_de_passe).digest('hex'),
        "email": req.body.email,
        "groupe": req.body.groupe,
        "ecole": req.body.ecole,
        "numero_de_telephone": req.body.numero_de_telephone,
        "pays": req.body.pays,
        "ville": req.body.ville,
        "code_postal": req.body.code_postal,
        "rgpd": req.body.rgpd
    });

    try {
        res.send('Compte créé !');
    } catch(err) {
        console.log(err.message);
    }
})

module.exports = router