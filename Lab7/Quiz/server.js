const express = require('express');
const app = express();
const PORT = 3000;
const bodyParser = require('body-parser');
const productModel = require('./models/cardModel');
require('./utils/db');
const productRouter = require('./routes/cardRoute');

// Middlewares
app.use(bodyParser.json());

// Api starter calls
app.use('/api', productRouter);

app.get('/', (req, res) => {
	res.send('test');
});

app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});
