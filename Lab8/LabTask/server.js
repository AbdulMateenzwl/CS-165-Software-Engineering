const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
require('./utils/db');
const UserRouter = require('./routes/userRoutes');

app.use(bodyParser.json());
// app.use(cors);

const PORT = 3000;

app.get('/', (req, res) => {
	res.send('Connection Check');
});

app.use('/api', UserRouter);

app.listen(PORT, () => {
	console.log('Database is listneing at port ' + PORT);
});
