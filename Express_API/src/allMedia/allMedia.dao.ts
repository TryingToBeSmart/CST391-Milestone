import { OkPacket } from "mysql";
import { execute } from "../services/mysql.connector";
import { AllMedia } from "./allMedia.model";
import { allMediaQueries } from './allMedia.queries';

/**
 * Get all media from the database.
 */
export const getAllMedia = async (): Promise<AllMedia[]> => {
    return execute<AllMedia[]>(allMediaQueries.readAllMedia, []);
};

/**
 * Get media by ID from the database.
 * @param allMediaId The ID of the media.
 */
export const getAllMediaById = async (allMediaId: number): Promise<AllMedia[]> => {
    return execute<AllMedia[]>(allMediaQueries.readAllMediaById, [allMediaId]);
};

/**
 * Get media by type from the database.
 * @param mediaType The type of media.
 */
export const getAllMediaByType = async (mediaType: string): Promise<AllMedia[]> => {
    return execute<AllMedia[]>(allMediaQueries.readAllMediaByType, [mediaType]);
};

/**
 * Get media by type search from the database.
 * @param search The search parameter for media type.
 */
export const getAllMediaByTypeSearch = async (search: string): Promise<AllMedia[]> => {
    return execute<AllMedia[]>(allMediaQueries.readAllMediaByTypeSearch, [`%${search}%`]);
};

/**
 * Get media by title search from the database.
 * @param search The search parameter for media title.
 */
export const getAllMediaByTitleSearch = async (search: string): Promise<AllMedia[]> => {
    return execute<AllMedia[]>(allMediaQueries.readAllMediaByTitleSearch, [`%${search}%`]);
};

/**
 * Create new media in the database.
 * @param allMedia The media object to be created.
 */
export const createAllMedia = async (allMedia: AllMedia): Promise<OkPacket> => {
    console.log("inserting: ", allMedia);
    return execute<OkPacket>(allMediaQueries.createAllMedia,
        [allMedia.title, allMedia.type, allMedia.releaseDate, allMedia.imgURL]);
};

/**
 * Update media in the database.
 * @param allMedia The media object to be updated.
 */
export const updateAllMedia = async (allMedia: AllMedia): Promise<OkPacket> => {
    return execute<OkPacket>(allMediaQueries.updateAllMedia,
        [allMedia.title, allMedia.type, allMedia.releaseDate, allMedia.id, allMedia.imgURL]);
};

/**
 * Delete media by ID from the database.
 * @param allMediaId The ID of the media to be deleted.
 */
export const deleteAllMedia = async (allMediaId: number): Promise<OkPacket> => {
    return execute<OkPacket>(allMediaQueries.deleteAllMedia, [allMediaId]);
};
