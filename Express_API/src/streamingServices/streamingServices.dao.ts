import { execute } from '../services/mysql.connector';
import { StreamingService } from './streamingServices.model';
import { OkPacket } from 'mysql';
import { streamingServiceQueries } from './streamingServices.queries';

/**
 * Get all streaming services from the database.
 */
export const getStreamingServices = async (): Promise<StreamingService[]> => {
    return execute<StreamingService[]>(streamingServiceQueries.getStreamingServices, []);
};

/**
 * Get streaming service by ID from the database.
 * @param id Streaming service ID.
 */
export const getStreamingServicesById = async (id: number): Promise<StreamingService[]> => {
    return execute<StreamingService[]>(streamingServiceQueries.getStreamingServicesById, [id]);
};

/**
 * Get streaming service by name search from the database.
 * @param name Name search parameter.
 */
export const getStreamingServicesByNameSearch = async (name: string): Promise<StreamingService[]> => {
    return execute<StreamingService[]>(streamingServiceQueries.getStreamingServicesByNameSearch, [`%${name}%`]);
};

/**
 * Create a new streaming service in the database.
 * @param streamingService Streaming service object.
 */
export const createStreamingServices = async (streamingService: StreamingService): Promise<OkPacket> => {
    const { serviceName } = streamingService;
    return execute<OkPacket>(streamingServiceQueries.createStreamingServices, [serviceName]);
};

/**
 * Update streaming service by ID in the database.
 * @param streamingService Streaming service object.
 */
export const updateStreamingServices = async (streamingService: StreamingService): Promise<OkPacket> => {
    const { serviceName, id } = streamingService;
    return execute<OkPacket>(streamingServiceQueries.updateStreamingServices, [serviceName, id]);
};

/**
 * Delete streaming service by ID from the database.
 * @param id Streaming service ID.
 */
export const deleteStreamingServices = async (id: number): Promise<OkPacket> => {
    return execute<OkPacket>(streamingServiceQueries.deleteStreamingServices, [id]);
};