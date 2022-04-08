

app.post("/bonPlans", async (req, res) => {

    try {
        res.send('Annonce créée !');
    } catch(err) {
        console.log(err.message);
    }
});