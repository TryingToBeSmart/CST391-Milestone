export const availableMediaQueries = {
    getAvailableMedia: 'SELECT * FROM streamingguide.availableMedia',
    getAvailableMediaByAllMediaId: 'SELECT * FROM streamingguide.availableMedia WHERE allMediaId = ?',
    getAvailableMediaByStreamingServiceId: 'SELECT * FROM streamingguide.availableMedia WHERE streamingServiceId = ?',
    createAvailableMedia: 'INSERT INTO streamingguide.availableMedia(allMediaId, streamingServiceId) VALUES (?, ?)',
    deleteAvailableMedia: 'DELETE FROM streamingguide.availableMedia WHERE allMediaId = ? AND streamingServiceId = ?',
};
