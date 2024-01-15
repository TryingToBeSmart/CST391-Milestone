import express from 'express';
import * as UserMediaListController from './userMediaList.controller';

const router = express.Router();

// get all userMediaList entries
router.get('/', UserMediaListController.getUserMediaList);

// get user media list by userId
router.get('/user/:userId', UserMediaListController.getUserMediaListByUserId);

// get user media list by allMediaId
router.get('/media/:allMediaId', UserMediaListController.getUserMediaListByAllMediaId);

// add media to user's list
router.post('/', UserMediaListController.addMediaToUserList);

// remove media from user's list
router.delete('/', UserMediaListController.removeMediaFromUserList);

module.exports = router;
