const express = require('express');
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express();
app.use(bodyParser)
app.use(cors)

const PORT = 3000;

app.get('/', (req, res) => {
	res.send('Connection Check');
});

app.use('/api',)

app.listen(PORT, () => {
	console.log('Database is listneing at port ' + PORT);
});
