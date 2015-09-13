/**
 * Module dependencies
 */

var http = require('http');
var app = require('express')();
var routes = require('./routes');
var middlewares = require('./middlewares');

/**
 * Mount front middlewares
 */

middlewares.front(app);

/**
 * Mount the routes
 */

routes(app);

/**
 * Mount back middlewares
 */

middlewares.back(app);

/**
 * Start the server
 */

var server = http.createServer(app);
var port = process.env['PORT'] || 1102;
server.listen(port,function(){
	console.log('Server running on port',port,'...');
});