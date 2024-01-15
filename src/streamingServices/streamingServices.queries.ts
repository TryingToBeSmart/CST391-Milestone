export const streamingServiceQueries = {
    getStreamingServices: 'SELECT * FROM streamingguide.streamingService',
    getStreamingServicesById: 'SELECT * FROM streamingguide.streamingService WHERE id = ?',
    getStreamingServicesByNameSearch: 'SELECT * FROM streamingguide.streamingService WHERE serviceName LIKE ?',
    createStreamingServices: 'INSERT INTO streamingguide.streamingService(serviceName) VALUES (?)',
    updateStreamingServices: 'UPDATE streamingguide.streamingService SET serviceName=? WHERE id=?',
    deleteStreamingServices: 'DELETE FROM streamingguide.streamingService WHERE id = ?',
};
