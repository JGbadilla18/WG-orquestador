var express = require('express');
var router = express.Router();
const userController =  require("../controllers/userController");

/// AUTHOR ROUTES ///

// GET request for one User.
router.get('/:id', userController.getUser);

// // GET request for list of all User.
router.get('/', userController.getUsers);

// // POST request for creating User.
router.post('/', userController.createUser);

// // DELETE request User.
router.delete('/:id/', userController.removeUser);

// // GET request to update User.
router.put('/:id/', userController.updateUser);


module.exports = router;
