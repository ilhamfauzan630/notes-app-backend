const NotesHandler = require('./handler');
const routes = require('./routes');

module.exports = {
    name: 'notes',
    vesion: '1.0.0',
    register: async (server, { service }) => {
        const notesHandler = new NotesHandler(service);
        server.route(routes(notesHandler));
    },
};