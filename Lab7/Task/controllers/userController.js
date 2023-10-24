const userSchema = require('../models/user');

async function CreateUser(req, res) {
	try {
		const newUser = userSchema.create(req.body);
		res.status(201).json({ newUser, status: true });
	} catch (err) {
		res.status(500).json({ error: err.message });
	}
}


module.exports={
    createUser
}