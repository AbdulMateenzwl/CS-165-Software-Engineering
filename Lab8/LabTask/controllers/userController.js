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
		const chkuser = await User.findOne({ userName });
		if (!chkuser) return res.status(404).json({ error: 'User not found' });
		if (chkuser.password != password) {
			return res.status(401).json({ error: 'Invalid Credentials' });
		}
		var token = GenerateToken(chkuser);
		return res.status(200).json({
			message: 'Logged in successfully',
			username: userName,
			fullName: chkuser.lastName,
			userid: chkuser._id,
			token: token,
		});
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
}

const jwt = require('jsonwebtoken');

function GenerateToken(user) {
	const payload = {
		role: user.role,
		id: user._id,
	};

	const token = jwt.sign(payload, 'jwt_key');
	return token;
}

async function Dashboard(req, res) {
	try {
		const newUser = await User.create(req.body);
		res.status(201).json(newUser);
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
}

module.exports = {
	createUser,
	updateUser,
	deleteUser,
	getAllUsers,
	loginUser,
	Dashboard,
};
