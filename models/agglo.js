const db = require('./client');

const findAll = async () => {
	const res = await db.select('nom', 'prenom').table('users');
	return res;
};

const createAccount = async () => {
	const res = await db('users').insert(req.body)
};

module.exports = { findAll, createAccount }