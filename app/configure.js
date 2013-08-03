/**
 * Module dependencies
 */

var nunjucks = require('nunjucks');
var express = require('express');
var moment = require('moment');

/**
 * Configure the given the `app`
 */

module.exports = function(app){

	// Middlewares
	app.use(express.static(__dirname + '/../public'));

	// Use the templating system
	var env = new nunjucks.Environment(new nunjucks.FileSystemLoader(__dirname + '/views'));
	env.express(app);
	env.addFilter('prettyDate',function(date){
		return moment(new Date(date)).fromNow();
	});
}
