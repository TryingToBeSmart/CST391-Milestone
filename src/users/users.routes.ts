import express from 'express';
import * as UsersController from './users.controller';

const router = express.Router();

// get list of all users
router.get('/', UsersController.getAllUsers);

// get user by id
router.get('/:id', UsersController.getUserById);

// get user by name
router.get('/name/:userName', UsersController.getUserByName);

// post new user
router.post('/', UsersController.createUser);

// edit existing user by id
router.put('/:id', UsersController.editUserById);

// delete user by id
router.delete('/:id', UsersController.deleteUserById);

module.exports = router;
