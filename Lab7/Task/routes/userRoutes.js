const Express = require('express');
const router = Express.Router();
const userController = require('../controllers/userController');


router.post('/user/login', userController.loginUser);
router.post('/User', userController.createUser);
router.get('/User', userController.getAllUsers);
router.put('/User/:id', userController.updateUser);
router.delete('/User/:id', userController.deleteUser);


module.exports = router;
