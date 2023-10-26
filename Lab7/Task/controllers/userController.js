const userSchema = require('../models/user');

async function CreateUser(req, res) {
	try {
		const newUser = await userSchema.create(req.body);
		res.status(201).json({ newUser, status: true });
	} catch (err) {
		res.status(500).json({ error: err.message });
	}
}

async function getAllUsers(req, res) {
	try {
		const allUsers = await userSchema.find();
		res.status(201).json({ allUsers, status: true });
	} catch (err) {
		res.status(500).json({ error: err.message });
	}
}


// async function 

module.exports = {
	CreateUser,
    getAllUsers,
};
