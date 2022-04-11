const express = require('express');
const router = express.Router();
const verifyToken = require('../middleware/verifyToken');

router.post("/", verifyToken, async (req, res) => {

    const bonPlan = require('../models/post');

    await bonPlan({
        "title": req.body.title,
        "date_de_post": req.body.date_de_post,
        "categorie": req.body.categorie,
        "description": req.body.description,
        "author_id": req.body.author_id
    })

    try {
        res.send('Annonce créée !');
    } catch(err) {
        console.log(err.message);
    }
});


module.exports = router;