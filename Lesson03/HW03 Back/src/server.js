const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');
const app = require('./app/app');
const router = require('./routes/router');
// const errorHandler = require('./utils/error-handler')

const errorHandler = (req, res, next) => {
    res.status(500).send('No such page');
    next();
};

const startServer = port => {
    app
        // .set('superSecret', config.secret)
        .use(cors())
        .use(bodyParser.urlencoded({ extended: false }))
        .use(bodyParser.json())
        .use(morgan(':method :url :status :res[content-length] - :response-time ms'))
        .use(router)
        .use(errorHandler);

    app.listen(port);

    console.log('Server was started at http://localhost:' + port);
};

module.exports = startServer;
