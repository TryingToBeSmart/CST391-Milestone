import { Request, RequestHandler, Response } from 'express';
import * as UserMediaListDao from './userMediaList.dao';
import { UserMediaList } from './userMediaList.model';
import { OkPacket } from 'mysql';


/*
* Get all userMediaList entries
*/
export const getUserMediaList: RequestHandler =async (req: Request, res: Response) => {
    try {
        const userMediaList = await UserMediaListDao.getUserMediaList();
        res.status(200).json(userMediaList);
    } catch (error) {
        console.error('[userMediaList.controller][getUserMediaList][Error]', error);
        res.status(500).json({
            message: 'There was an error when getting all user media list'
        });
    }
};

/**
 * Get user media list by userId.
 */
export const getUserMediaListByUserId: RequestHandler = async (req: Request, res: Response) => {
    try {
        const userId = parseInt(req.params.userId);
        const userMediaList = await UserMediaListDao.getUserMediaListByUserId(userId);
        res.status(200).json(userMediaList);
    } catch (error) {
        console.error('[userMediaList.controller][getUserMediaListByUserId][Error]', error);
        res.status(500).json({
            message: 'There was an error when getting user media list by userId'
        });
    }
};

/**
 * Get user media list by allMediaId.
 */
export const getUserMediaListByAllMediaId: RequestHandler = async (req: Request, res: Response) => {
    try {
        const allMediaId = parseInt(req.params.allMediaId);
        const userMediaList = await UserMediaListDao.getUserMediaListByAllMediaId(allMediaId);
        res.status(200).json(userMediaList);
    } catch (error) {
        console.error('[userMediaList.controller][getUserMediaListByAllMediaId][Error]', error);
        res.status(500).json({
            message: 'There was an error when getting user media list by allMediaId'
        });
    }
};

/**
 * Add media to user's list.
 */
export const addMediaToUserList: RequestHandler = async (req: Request, res: Response) => {
    try {
        const userMediaList: UserMediaList = req.body;
        await UserMediaListDao.addMediaToUserList(userMediaList);

        res.status(200).json({ success: true });
    } catch (error) {
        console.error('[userMediaList.controller][addMediaToUserList][Error]', error);
        res.status(500).json({
            message: 'There was an error when adding media to user\'s list'
        });
    }
};

/**
 * Remove media from user's list.
 */
export const removeMediaFromUserList: RequestHandler = async (req: Request, res: Response) => {
    try {
        const userMediaList: UserMediaList = req.body;
        await UserMediaListDao.removeMediaFromUserList(userMediaList);
        res.status(200).json({ success: true });
    } catch (error) {
        console.error('[userMediaList.controller][removeMediaFromUserList][Error]', error);
        res.status(500).json({
            message: 'There was an error when removing media from user\'s list'
        });
    }
};
