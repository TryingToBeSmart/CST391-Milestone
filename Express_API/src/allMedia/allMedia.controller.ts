import { Request, RequestHandler, Response } from 'express';
import * as AllMediaDao from './allMedia.dao';
import { AllMedia } from './allMedia.model';
import { OkPacket } from 'mysql';

/**
 * Get all media or media by ID based on the query parameter.
 */
export const getAllMedia: RequestHandler = async (req: Request, res: Response) => {
    try {
        let allMedia;
        let allMediaId = parseInt(req.query.id as string);

        console.log('AllMedia Id: ', allMediaId);
        if (Number.isNaN(allMediaId)) {
            // Get all media
            allMedia = await AllMediaDao.getAllMedia();
        } else {
            // Get media by ID
            allMedia = await AllMediaDao.getAllMediaById(allMediaId);
        }
        res.status(200).json(allMedia);
    } catch (error) {
        console.error('[allMedia.controller][getAllMedia][Error]', error);
        res.status(500).json({
            message: 'There was an error when getting all media'
        });
    }
};

/**
 * Get media by ID.
 */
export const getAllMediaById: RequestHandler = async (req: Request, res: Response) => {
    try {
        const allMedia = await AllMediaDao.getAllMediaById(parseInt(req.params.id));
        res.status(200).json(allMedia);
    } catch (error) {
        console.error('[allMedia.controller][getAllMediaById][Error]', error);
        res.status(500).json({
            message: 'There was an error when getting media by ID'
        });
    }
};

/**
 * Get media by title search.
 */
export const getAllMediaByTitle: RequestHandler = async (req: Request, res: Response) => {
    try {
        const allMedia = await AllMediaDao.getAllMediaByTitleSearch(req.params.title);
        res.status(200).json(allMedia);
    } catch (error) {
        console.error('[allMedia.controller][getAllMediaByTitle][Error]', error);
        res.status(500).json({
            message: 'There was an error when getting media by title'
        });
    }
};

/**
 * Get media by type.
 */
export const getAllMediaByType: RequestHandler = async (req: Request, res: Response) => {
    try {
        const allMedia = await AllMediaDao.getAllMediaByType(req.params.type);
        res.status(200).json(allMedia);
    } catch (error) {
        console.error('[allMedia.controller][getAllMediaByType][Error]', error);
        res.status(500).json({
            message: 'There was an error when getting media by type'
        });
    }
};

/**
 * Create new media.
 */
export const createAllMedia: RequestHandler = async (req: Request, res: Response) => {
    try {
        const allMedia: AllMedia = req.body;
        const okPacket: OkPacket = await AllMediaDao.createAllMedia(allMedia);

        res.status(200).json({ id: okPacket.insertId });
    } catch (error) {
        console.error('[allMedia.controller][createAllMedia][Error]', error);
        res.status(500).json({
            message: 'There was an error when creating new media'
        });
    }
};

/**
 * Update media by ID.
 */
export const editAllMediaById: RequestHandler = async (req: Request, res: Response) => {
    try {
        const allMedia: AllMedia = req.body;
        const okPacket: OkPacket = await AllMediaDao.updateAllMedia(allMedia);

        res.status(200).json({ success: true });
    } catch (error) {
        console.error('[allMedia.controller][editAllMediaById][Error]', error);
        res.status(500).json({
            message: 'There was an error when updating media by ID'
        });
    }
};

/**
 * Delete media by ID.
 */
export const deleteAllMediaById: RequestHandler = async (req: Request, res: Response) => {
    try {
        let allMediaId = parseInt(req.params.id as string);
        console.log('AllMedia Id: ', allMediaId);

        if (!Number.isNaN(allMediaId)) {
            await AllMediaDao.deleteAllMedia(allMediaId);
            res.status(200).json({ success: true });
        } else {
            throw new Error("Integer expected for AllMedia Id");
        }
    } catch (error) {
        console.error('[allMedia.controller][deleteAllMediaById][Error]', error);
        res.status(500).json({
            message: 'There was an error when deleting media by ID'
        });
    }
};