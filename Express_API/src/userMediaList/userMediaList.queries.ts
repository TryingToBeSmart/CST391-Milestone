export const userMediaListQueries = {
    getUserMediaList: 'SELECT * FROM streamingguide.userMediaList',
    getUserMediaListByUserId: 'SELECT * FROM streamingguide.userMediaList WHERE userId = ?',
    getUserMediaListByAllMediaId: 'SELECT * FROM streamingguide.userMediaList WHERE allMediaId = ?',
    addMediaToUserList: 'INSERT INTO streamingguide.userMediaList(userId, allMediaId) VALUES (?, ?)',
    removeMediaFromUserList: 'DELETE FROM streamingguide.userMediaList WHERE userId = ? AND allMediaId = ?',
};
