export const userQueries = {
    getAllUsers: 'SELECT * FROM streamingguide.user',
    getUserById: 'SELECT * FROM streamingguide.user WHERE id = ?',
    getUserByNameSearch: 'SELECT * FROM streamingguide.user WHERE userName LIKE ?',
    createUser: 'INSERT INTO streamingguide.user(userName, email, password, firstName, lastName) VALUES (?, ?, ?, ?, ?)',
    updateUser: 'UPDATE streamingguide.user SET userName=?, email=?, password=?, firstName=?, lastName=? WHERE id=?',
    deleteUser: 'DELETE FROM streamingguide.user WHERE id = ?',
};
