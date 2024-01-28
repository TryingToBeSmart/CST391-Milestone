import { Request, RequestHandler, Response } from 'express';
import * as UsersDao from './users.dao';
import { StreamingService } from './users.model';
import { OkPacket } from 'mysql';

/**
 * Get all users or user by ID based on the query parameter.
 */
export const getAllUsers: RequestHandler = async (req: Request, res: Response) => {
    try {
        let users;
        let userId = parseInt(req.query.id as string);

        console.log('User Id: ', userId);
        if (Number.isNaN(userId)) {
            // Get all users
            users = await UsersDao.getAllUsers();
        } else {
            // Get user by ID
            users = await UsersDao.getUserById(userId);
        }
        res.status(200).json(users);
    } catch (error) {
        console.error('[users.controller][getAllUsers][Error]', error);
        res.status(500).json({
            message: 'There was an error when getting all users'
        });
    }
};

/**
 * Get user by ID.
 */
export const getUserById: RequestHandler = async (req: Request, res: Response) => {
    try {
        const user = await UsersDao.getUserById(parseInt(req.params.id));
        res.status(200).json(user);
    } catch (error) {
        console.error('[users.controller][getUserById][Error]', error);
        res.status(500).json({
            message: 'There was an error when getting user by ID'
        });
    }
};

/**
 * Get user by name search.
 */
export const getUserByName: RequestHandler = async (req: Request, res: Response) => {
    try {
        const users = await UsersDao.getUserByNameSearch(req.params.userName);
        res.status(200).json(users);
    } catch (error) {
        console.error('[users.controller][getUserByName][Error]', error);
        res.status(500).json({
            message: 'There was an error when getting user by name'
        });
    }
};

/**
 * Create new user.
 */
export const createUser: RequestHandler = async (req: Request, res: Response) => {
    try {
        const user: StreamingService = req.body;
        const okPacket: OkPacket = await UsersDao.createUser(user);

        res.status(200).json({ id: okPacket.insertId });
    } catch (error) {
        console.error('[users.controller][createUser][Error]', error);
        res.status(500).json({
            message: 'There was an error when creating new user'
        });
    }
};

/**
 * Update user by ID.
 */
export const editUserById: RequestHandler = async (req: Request, res: Response) => {
    try {
        const user: StreamingService = req.body;
        const okPacket: OkPacket = await UsersDao.updateUser(user);

        res.status(200).json({ success: true });
    } catch (error) {
        console.error('[users.controller][editUserById][Error]', error);
        res.status(500).json({
            message: 'There was an error when updating user by ID'
        });
    }
};

/**
 * Delete user by ID.
 */
export const deleteUserById: RequestHandler = async (req: Request, res: Response) => {
    try {
        let userId = parseInt(req.params.id as string);
        console.log('User Id: ', userId);

        if (!Number.isNaN(userId)) {
            await UsersDao.deleteUser(userId);
            res.status(200).json({ success: true });
        } else {
            throw new Error("Integer expected for User Id");
        }
    } catch (error) {
        console.error('[users.controller][deleteUserById][Error]', error);
        res.status(500).json({
            message: 'There was an error when deleting user by ID'
        });
    }
};
