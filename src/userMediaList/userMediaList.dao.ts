import { execute } from '../services/mysql.connector';
import { UserMediaList } from './userMediaList.model';
import { OkPacket } from 'mysql';
import { userMediaListQueries } from './userMediaList.queries';

/*
* Get all user media list
*/
export const getUserMediaList = async (): Promise<UserMediaList[]> => {
    return execute<UserMediaList[]>(userMediaListQueries.getUserMediaList, []);
};

/**
 * Get user media list by userId from the database.
 * @param userId User ID.
 */
export const getUserMediaListByUserId = async (userId: number): Promise<UserMediaList[]> => {
    return execute<UserMediaList[]>(userMediaListQueries.getUserMediaListByUserId, [userId]);
};

/**
 * Get user media list by allMediaId from the database.
 * @param allMediaId All Media ID.
 */
export const getUserMediaListByAllMediaId = async (allMediaId: number): Promise<UserMediaList[]> => {
    return execute<UserMediaList[]>(userMediaListQueries.getUserMediaListByAllMediaId, [allMediaId]);
};

/**
 * Add media to user's list in the database.
 * @param userMediaList UserMediaList object.
 */
export const addMediaToUserList = async (userMediaList: UserMediaList): Promise<OkPacket> => {
    const { userId, allMediaId } = userMediaList;
    return execute<OkPacket>(userMediaListQueries.addMediaToUserList, [userId, allMediaId]);
};

/**
 * Remove media from user's list in the database.
 * @param userMediaList UserMediaList object.
 */
export const removeMediaFromUserList = async (userMediaList: UserMediaList): Promise<OkPacket> => {
    const { userId, allMediaId } = userMediaList;
    return execute<OkPacket>(userMediaListQueries.removeMediaFromUserList, [userId, allMediaId]);
};
