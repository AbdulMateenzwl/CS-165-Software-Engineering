const Express = require('express');
const router = Express.Router();
const UserController = require('../controllers/userController');

router.post('/signup', UserController.CreateUser);

router.get('/getallusers',UserController.getAllUsers)

module.exports = router;
