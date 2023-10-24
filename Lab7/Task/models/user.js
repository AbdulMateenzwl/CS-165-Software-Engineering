const mongoose = require('mongoose');

const User = new mongoose.Schema({
	username: String,
	password: String,
	firstName: String,
	lastName: String,
	DOB: Date,
	role: String,
});
