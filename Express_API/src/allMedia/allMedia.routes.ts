import express from 'express';
import * as AllMediaController from './allMedia.controller';

const router = express.Router();

// get list of all media
router.get('/', AllMediaController.getAllMedia);

// get media by id
router.get('/:id', AllMediaController.getAllMediaById);

// get media by title
router.get('/title/:title', AllMediaController.getAllMediaByTitle);

// get media by type
router.get('/type/:type', AllMediaController.getAllMediaByType);

// post new media
router.post('/', AllMediaController.createAllMedia);

// edit existing media by id
router.put('/:id', AllMediaController.editAllMediaById);

// delete media by id
router.delete('/:id', AllMediaController.deleteAllMediaById);

module.exports = router;