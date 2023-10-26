const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
	username: String,
	password: String,
	firstName: String,
	lastName: String,
	DOB: Date,
	role: String,
});

module.exports = new mongoose.model('User',UserSchema)