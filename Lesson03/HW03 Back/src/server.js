const morgan = require('morgan');
const cors = require('cors');
const app = require('./app/app');
const router = require('./routes/router');
const express = require('express');
const path = require('path')

// const errorHandler = require('./utils/error-handler')

const errorHandler = (req, res, next) => {
    res.status(500).send('No such page');
    next();
};
const staticImagePath = path.join(__dirname, "../public")


const startServer = port => {
    app
        // .set('superSecret', config.secret)
        .use(cors())
        .use(express.urlencoded({ extended: false }))
        .use(express.json())
        .use(morgan(':method :url :status :res[content-length] - :response-time ms'))
        .use('/public', express.static(staticImagePath))
        .use(router)
        .use(errorHandler);

    app.listen(port);

    console.log('Server was started at http://localhost:' + port);
};

module.exports = startServer;
