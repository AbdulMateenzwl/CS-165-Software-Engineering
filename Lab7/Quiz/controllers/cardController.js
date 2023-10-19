const Card = require('../models/cardModel');

async function createCard(req, res) {
	try {
		const newCard = await Card.create(req.body);
		res.status(201).json({ newCard, success: true });
	} catch (error) {
		res.status(500).json({ apierror: error });
	}
}

module.exports = {
	createCard,
};
