const Express = require('express');
const router = Express.Router();
const userController = require('../controllers/userController');
const validateToken = require('../utils/auth_middleware');
const validateRole = require('../utils/verify_role')

router.post('/user/login', userController.loginUser);
router.post('/User', userController.createUser);
router.get('/User', userController.getAllUsers);
router.put('/User/:id', userController.updateUser);
router.delete('/User/:id', userController.deleteUser);
router.get('/admin', validateToken, validateRole(['Admin']), userController.Dashboard);

module.exports = router;
