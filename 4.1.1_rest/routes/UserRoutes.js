const express = require('express');
const router = express.Router();
// const controllers = require('../controllers');
const { UserControllers } = require('../controllers');

// users/
// router.get('/', controllers.UserControllers.getUsers);
router.get('/', UserControllers.getUsers);

router.get('/:id', UserControllers.getOneUser);

  // users/
router.post('/', UserControllers.createUser);

// users/:id
router.put('/:id', UserControllers.putUser);

router.patch('/:id',  UserControllers.updateUser);

router.delete('/:id', UserControllers.deleteUser);

module.exports = router;