const User = require('../models/user');

async function createUser(req, res) {
	try {
		const newUser = await User.create(req.body);
		res.status(201).json(newUser);
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
}
async function updateUser(req, res) {
	try {
		const { id } = req.params;
		const updateUser = await User.findByIdAndUpdate(id, req.body, {
			new: true,
		});
		res.status(201).json(updateUser);
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
}
async function getAllUsers(req, res) {
	try {
		const users = await User.find();
		res.status(201).json(users);
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
}
async function deleteUser(req, res) {
	try {
		const { id } = req.params;
		await User.findByIdAndRemove(id);
		res.status(204).send();
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
}
async function loginUser(req, res) {
	try {
		const { userName, password } = req.body;
		const existingUser = await User.findOne({ userName, password });

		if (existingUser) {
			res.json({ message: 'Login successful', user: existingUser });
		} else {
			res.status(401).json({ error: 'Invalid credentials' });
		}
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
}

module.exports = { createUser, updateUser, deleteUser, getAllUsers, loginUser };
