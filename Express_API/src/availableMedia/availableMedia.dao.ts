import { execute } from '../services/mysql.connector';
import { AvailableMedia } from './availableMedia.model';
import { OkPacket } from 'mysql';
import { availableMediaQueries } from './availableMedia.queries';

/**
 * Get all available media from the database.
 */
export const getAvailableMedia = async (): Promise<AvailableMedia[]> => {
    return execute<AvailableMedia[]>(availableMediaQueries.getAvailableMedia, []);
};

/**
 * Get available media by allMediaId from the database.
 * @param allMediaId All media ID.
 */
export const getAvailableMediaByAllMediaId = async (allMediaId: number): Promise<AvailableMedia[]> => {
    return execute<AvailableMedia[]>(availableMediaQueries.getAvailableMediaByAllMediaId, [allMediaId]);
};

/**
 * Get available media by streamingServiceId from the database.
 * @param streamingServiceId Streaming service ID.
 */
export const getAvailableMediaByStreamingServiceId = async (streamingServiceId: number): Promise<AvailableMedia[]> => {
    return execute<AvailableMedia[]>(availableMediaQueries.getAvailableMediaByStreamingServiceId, [streamingServiceId]);
};

/**
 * Create new available media in the database.
 * @param availableMedia Available media object.
 */
export const createAvailableMedia = async (availableMedia: AvailableMedia): Promise<OkPacket> => {
    const { allMediaId, streamingServiceId } = availableMedia;
    return execute<OkPacket>(availableMediaQueries.createAvailableMedia, [allMediaId, streamingServiceId]);
};

/**
 * Delete available media from the database.
 * @param allMediaId All media ID.
 * @param streamingServiceId Streaming service ID.
 */
export const deleteAvailableMedia = async (availableMedia: AvailableMedia): Promise<OkPacket> => {
    const { allMediaId, streamingServiceId } = availableMedia;
    return execute<OkPacket>(availableMediaQueries.deleteAvailableMedia, [allMediaId, streamingServiceId]);
};
