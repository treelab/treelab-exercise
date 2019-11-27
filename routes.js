const nextRoutes = require('next-routes');

const Routes = nextRoutes();

Routes.add('templates', '/templates/:categorySlug?', 'templates');

module.exports = Routes;
