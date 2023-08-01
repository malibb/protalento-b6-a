const express = require('express');
const router = express.Router();
// const controllers = require('../controllers');
const { UserControllers } = require('../controllers');

// users/
// router.get('/', controllers.UserControllers.getUsers);
// localhost:3000/users/
router.get('/', UserControllers.getUsers);

// localhost:3000/users/:id
router.get('/:id', UserControllers.getOneUser);

  // users/
router.post('/', UserControllers.createUser);

// users/:id
router.put('/:id', UserControllers.putUser);

router.patch('/:id',  UserControllers.updateUser);

router.delete('/:id', UserControllers.deleteUser);

module.exports = router;