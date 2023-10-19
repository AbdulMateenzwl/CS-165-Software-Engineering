const Product = require('../models/productModel');

async function createProduct(req, res) {
	try {
		const newProduct = await Product.create(req.body);
		res.status(201).json({ newProduct, data: 'a sdfa fs' });
	} catch (error) {
		res.status(500).json({ apierror: error });
	}
}

async function updateProduct(req, res) {
	try {
		const { id } = req.params;
		const updatedProduct = await Product.findByIdAndUpdate(id, req.body, {
			new: true,
		});
		res.json(updatedProduct);
	} catch (err) {
		res.status(500).json({ error: err.message });
	}
}

async function getAllProduct(req, res) {
	try {
		const products = await Product.find();
		res.json(products)
	} catch (err) {
		res.status(500).json({ error: err.message });
	}
}


module.exports = {
	createProduct,
};
