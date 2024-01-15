import { Request, RequestHandler, Response } from 'express';
import * as StreamingServicesDao from './streamingServices.dao';
import { StreamingService } from './streamingServices.model';
import { OkPacket } from 'mysql';

/**
 * Get all streaming services or streaming service by ID based on the query parameter.
 */
export const getStreamingServices: RequestHandler = async (req: Request, res: Response) => {
    try {
        let streamingServices;
        let streamingServiceId = parseInt(req.query.id as string);

        console.log('StreamingService Id: ', streamingServiceId);
        if (Number.isNaN(streamingServiceId)) {
            // Get all streaming services
            streamingServices = await StreamingServicesDao.getStreamingServices();
        } else {
            // Get streaming service by ID
            streamingServices = await StreamingServicesDao.getStreamingServicesById(streamingServiceId);
        }
        res.status(200).json(streamingServices);
    } catch (error) {
        console.error('[streamingServices.controller][getStreamingServices][Error]', error);
        res.status(500).json({
            message: 'There was an error when getting all streaming services'
        });
    }
};

/**
 * Get streaming service by ID.
 */
export const getStreamingServicesById: RequestHandler = async (req: Request, res: Response) => {
    try {
        const streamingServices = await StreamingServicesDao.getStreamingServicesById(parseInt(req.params.id));
        res.status(200).json(streamingServices);
    } catch (error) {
        console.error('[streamingServices.controller][getStreamingServicesById][Error]', error);
        res.status(500).json({
            message: 'There was an error when getting streaming service by ID'
        });
    }
};

/**
 * Get streaming service by name search.
 */
export const getStreamingServicesByNameSearch: RequestHandler = async (req: Request, res: Response) => {
    try {
        const streamingServices = await StreamingServicesDao.getStreamingServicesByNameSearch(req.params.name);
        res.status(200).json(streamingServices);
    } catch (error) {
        console.error('[streamingServices.controller][getStreamingServicesByName][Error]', error);
        res.status(500).json({
            message: 'There was an error when getting streaming service by name'
        });
    }
};

/**
 * Create new streaming service.
 */
export const createStreamingServices: RequestHandler = async (req: Request, res: Response) => {
    try {
        const streamingService: StreamingService = req.body;
        const okPacket: OkPacket = await StreamingServicesDao.createStreamingServices(streamingService);

        res.status(200).json({ id: okPacket.insertId });
    } catch (error) {
        console.error('[streamingServices.controller][createStreamingServices][Error]', error);
        res.status(500).json({
            message: 'There was an error when creating new streaming service'
        });
    }
};

/**
 * Update streaming service by ID.
 */
export const editStreamingServicesById: RequestHandler = async (req: Request, res: Response) => {
    try {
        const streamingService: StreamingService = req.body;
        const okPacket: OkPacket = await StreamingServicesDao.updateStreamingServices(streamingService);

        res.status(200).json({ success: true });
    } catch (error) {
        console.error('[streamingServices.controller][editStreamingServicesById][Error]', error);
        res.status(500).json({
            message: 'There was an error when updating streaming service by ID'
        });
    }
};

/**
 * Delete streaming service by ID.
 */
export const deleteStreamingServicesById: RequestHandler = async (req: Request, res: Response) => {
    try {
        let streamingServiceId = parseInt(req.params.id as string);
        console.log('StreamingService Id: ', streamingServiceId);

        if (!Number.isNaN(streamingServiceId)) {
            await StreamingServicesDao.deleteStreamingServices(streamingServiceId);
            res.status(200).json({ success: true });
        } else {
            throw new Error("Integer expected for StreamingService Id");
        }
    } catch (error) {
        console.error('[streamingServices.controller][deleteStreamingServicesById][Error]', error);
        res.status(500).json({
            message: 'There was an error when deleting streaming service by ID'
        });
    }
};
