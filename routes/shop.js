const express = require('express');
const router = express.Router();

router.post("/", async (req, res) => {
    const createShop = require('../models/shop');

    await createShop({
        "nom": req.body.nom,
        "siret": req.body.siret,
        "categorie": req.body.categorie,
        "addresse": req.body.addresse,
        "ville": req.body.ville,
        "pays": req.body.pays,
        "owner_id": req.body.owner_id
    })

    try {
        res.send('Commerce créée !');
    } catch(err) {
        console.log(err.message);
    }
});


module.exports = router;