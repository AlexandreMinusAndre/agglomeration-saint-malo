const db = require('../models/client');

const bonPlans = async content => {

    await db('post').insert(content);
}

module.exports = bonPlans;