import { getAvailableMediaByAllMediaId } from './availableMedia.dao';
import express from 'express';
import * as AvailableMediaController from './availableMedia.controller';

const router = express.Router();

// get list of all available media
router.get('/', AvailableMediaController.getAvailableMedia);

// get available media by allMediaId
router.get('/allMediaId/:allMediaId', AvailableMediaController.getAvailableMediaByAllMediaId);

// get available media by streamingServiceId
router.get('/streamingServiceId/:streamingServiceId', AvailableMediaController.getAvailableMediaByStreamingServiceId);

// post new available media
router.post('/', AvailableMediaController.createAvailableMedia);

// delete available media
router.delete('/', AvailableMediaController.deleteAvailableMedia);

module.exports = router;
