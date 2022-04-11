const express = require('express');
const router = express.Router();

router.post("/", async (req, res) => {
    const createShop = require('../models/shop');

    await createShop({
        "asso": req.body.asso,
        "cate_asso": req.body.cate_asso,
        "type": req.body.type,
        "adresse": req.body.adresse,
        "city": req.body.city,
        "owner_id": req.body.owner_id,
        "zipcode": req.body.zipcode,
        "phone": req.body.phone,
    })

    try {
        res.send('Commerce créée !');
    } catch(err) {
        console.log(err.message);
    }
});


module.exports = router;