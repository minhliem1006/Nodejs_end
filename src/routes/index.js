const courseRoute = require('./course');
const siteRoute = require('./site');
const meRoute = require('./me');

function route(app)
{
    app.use('/me',meRoute);
    app.use('/courses',courseRoute);
    app.use('/',siteRoute);
}
module.exports = route;