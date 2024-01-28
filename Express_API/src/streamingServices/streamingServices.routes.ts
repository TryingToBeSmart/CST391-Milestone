import express from 'express';
import * as StreamingServicesController from './streamingServices.controller';

const router = express.Router();

// get list of all streamingService
router.get('/', StreamingServicesController.getStreamingServices);

// get streamingService by id
router.get('/:id', StreamingServicesController.getStreamingServicesById);

// get streamingService by name
router.get('/name/:name', StreamingServicesController.getStreamingServicesByNameSearch);

// post new streamingService
router.post('/', StreamingServicesController.createStreamingServices);

// edit existing streamingService by id
router.put('/:id', StreamingServicesController.editStreamingServicesById);

// delete streamingService by id
router.delete('/:id', StreamingServicesController.deleteStreamingServicesById);

module.exports = router;