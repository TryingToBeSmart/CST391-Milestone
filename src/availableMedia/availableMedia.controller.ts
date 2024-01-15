import { Request, RequestHandler, Response } from 'express';
import * as AvailableMediaDao from './availableMedia.dao';
import { AvailableMedia } from './availableMedia.model';
import { OkPacket } from 'mysql';

/**
 * Get all available media.
 */
export const getAvailableMedia: RequestHandler = async (req: Request, res: Response) => {
    try {
        const availableMedia = await AvailableMediaDao.getAvailableMedia();
        res.status(200).json(availableMedia);
    } catch (error) {
        console.error('[AvailableMediaController][getAvailableMedia][Error]', error);
        res.status(500).json({
            message: 'There was an error when getting available media'
        });
    }
};

/**
 * Get available media by allMediaId.
 */
export const getAvailableMediaByAllMediaId: RequestHandler = async (req: Request, res: Response) => {
    try {
        const availableMedia = await AvailableMediaDao.getAvailableMediaByAllMediaId(parseInt(req.params.allMediaId));
        res.status(200).json(availableMedia);
    } catch (error) {
        console.error('[AvailableMediaController][getAvailableMediaByAllMediaId][Error]', error);
        res.status(500).json({
            message: 'There was an error when getting available media by allMediaId'
        });
    }
};

/**
 * Get available media by streamingServiceId.
 */
export const getAvailableMediaByStreamingServiceId: RequestHandler = async (req: Request, res: Response) => {
    try {
        const availableMedia = await AvailableMediaDao.getAvailableMediaByStreamingServiceId(parseInt(req.params.streamingServiceId));
        res.status(200).json(availableMedia);
    } catch (error) {
        console.error('[AvailableMediaController][getAvailableMediaByStreamingServiceId][Error]', error);
        res.status(500).json({
            message: 'There was an error when getting available media by streamingServiceId'
        });
    }
};

/**
 * Create new available media.
 */
export const createAvailableMedia: RequestHandler = async (req: Request, res: Response) => {
    try {
        const availableMedia: AvailableMedia = req.body;
        await AvailableMediaDao.createAvailableMedia(availableMedia);

        res.status(200).json({ success: true });
    } catch (error) {
        console.error('[AvailableMediaController][createAvailableMedia][Error]', error);
        res.status(500).json({
            message: 'There was an error when creating new available media'
        });
    }
};

/**
 * Delete available media.
 */
export const deleteAvailableMedia: RequestHandler = async (req: Request, res: Response) => {
    try {
        // Extract identifiers from the request body
        const deleteMedia: AvailableMedia = req.body;

        // Perform the deletion
        await AvailableMediaDao.deleteAvailableMedia(deleteMedia);
        res.status(200).json({ success: true });
    } catch (error) {
        console.error('[AvailableMediaController][deleteAvailableMedia][Error]', error);
        res.status(500).json({
            message: 'There was an error when deleting available media'
        });
    }
};
