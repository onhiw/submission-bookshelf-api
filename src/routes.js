const { addBookHandler, fetchAllBooksHandler, fetchDetailBookByIdHandler, updateBookByIdHandler, deleteBookByIdHandler } = require('./handler');

const routes = [
    {
        method: 'POST',
        path: '/books',
        handler: addBookHandler,
    },
    {
        method: 'GET',
        path: '/books',
        handler: fetchAllBooksHandler,
    },
    {
        method: 'GET',
        path: '/books/{id}',
        handler: fetchDetailBookByIdHandler,
    },
    {
        method: 'PUT',
        path: '/books/{id}',
        handler: updateBookByIdHandler,
    },
    {
        method: 'DELETE',
        path: '/books/{id}',
        handler: deleteBookByIdHandler,
    },
];

module.exports = routes;