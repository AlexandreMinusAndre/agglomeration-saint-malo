const db = require('../models/client');

const newAccount = async infos => {
    return await db('users').insert(infos);
}

const login = async (email, password) => {

    const res = await db('users').where({
        email: email,
        password: password
      }).select('*');


    return res;
}

module.exports = {
    newAccount,
    login
};