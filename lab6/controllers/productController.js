const Product = require('../models/productModel');

async function createProduct(req, res) {
	try {
		const newProduct = await Product.create(req.body);
		res.status(201).json({ newProduct,"data":"a sdfa fs" });
	} catch (error) {
		res.status(500).json({ apierror: error });
	}
}

module.exports = {
	createProduct,
};
