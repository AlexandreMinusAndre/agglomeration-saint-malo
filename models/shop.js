const db = require('../models/client');

const createShops = async content => {

    await db('shop').insert(content);
}

module.exports = createShops;