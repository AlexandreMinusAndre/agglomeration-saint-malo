const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');

router.post("/", async (req, res) => {

    const createShop = require('../models/shop');

    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTcsIm5vbSI6Ik5vbSIsInByZW5vbSI6IlByZW5vbSIsIm1vdF9kZV9wYXNzZSI6ImY0ZjI2M2U0MzljZjQwOTI1ZTZhNDEyMzg3YTk0NzJhNjc3M2MyNTgwMjEyYTRmYjUwZDIyNGQzYTgxN2RlMTciLCJlbWFpbCI6ImV4ZW1wbGVAZ21haWwuY29tIiwiZ3JvdXBlIjoiZXR1ZGlhbnQiLCJlY29sZSI6InRlc3Qgc2Nob29sIiwibnVtZXJvX2RlX3RlbGVwaG9uZSI6IjAxMDIwMzA0MDUiLCJwYXlzIjoiRnJhbmNlIiwidmlsbGUiOiJEaW5hcmQiLCJjb2RlX3Bvc3RhbCI6IjM1ODAwIiwiYWRtaW5pc3RyYXRldXIiOm51bGwsInJncGQiOnRydWUsImlhdCI6MTY0OTY2MDg0MH0.DkmKSc-MGQofES2nNkXW0Ssq040rxBm0Echef_qCkX4'

    const decodedToken = jwt.verify(token, "secretkey");

    if(decodedToken.groupe === 'commercant') {

        await createShop({
            "nom": req.body.nom,
            "ciret": req.body.ciret,
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
        
    } else {
        res.status(401).send('Vous ne pouvez pas créer de magasin sans être commercant !');
    }

    
});


module.exports = router;