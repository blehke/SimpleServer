var express = require('express');
var app = express();

const port = process.env.PORT || 9999;

// ############################################################################################################
// Set up Logger
const log4js = require('log4js');
log4js.configure({
    appenders: { 
        trace: { type: 'file', filename: __dirname + '\\server.log', flags: 'w' },
        console: {type: 'console'}
    },
    categories: { default: { appenders: ['trace', 'console'], level: 'trace' } }
});

const logger = log4js.getLogger('[server]');
// logger.trace('Entering cheese testing');
// logger.debug('Got cheese.');
// logger.info('Cheese is Gouda.');
// logger.warn('Cheese is quite smelly.');
// logger.error('Cheese is too ripe!');
// logger.fatal('Cheese was breeding ground for listeria.');
// ############################################################################################################


//setting middleware
app.use(express.static(__dirname + '\\public')); //Serves resources from public folder
logger.trace(__dirname + '\\public');

// Start server
app.listen(port, (err) => {
    if(err){
        logger.error('Cannot connect...', err);
    } else {
        logger.trace(`Connected! Server listening on port ${port}`);
    }
});