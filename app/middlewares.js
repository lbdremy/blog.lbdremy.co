/**
 * Module dependencies
 */

var nunjucks = require('nunjucks');
var express = require('express');
var moment = require('moment');
var compression = require('compression');
var responseTime = require('response-time');

/**
 * Load errors
 */

var NotFoundError = require('./errors/not-found-error');

/**
 * Mount the front middlewares on the given the `app`
 */

exports.front = function(app){

	// Blog parameters
	var sections = [
		{
			name : 'Thoughts'
		},
		{
			name : 'Issues'
		},
		{
			name : 'Notes'
		},
		{
			name : 'About me',
			link : 'https://github.com/lbdremy'
		}
	];
	app.set('sections',sections);

	// Add header X-Response-Time
	app.use(responseTime());

	// Compress responses
  	app.use(compression());

	// Serve static assets
	app.use(express.static(__dirname + '/../public'));

	// Use the templating system
	var env = new nunjucks.Environment(new nunjucks.FileSystemLoader(__dirname + '/views'));
	env.express(app);
	env.addFilter('prettyDate',function(date){
		return moment(new Date(date)).fromNow();
	});
	env.addFilter('urlencode',function(value){
		return encodeURIComponent(value);
	});

};

/**
 * Mount the back middlewares on the given the `app`
 */

exports.back = function(app){

	var sections = app.get('sections');

	app.use(function(err,req,res,next){
		if(err instanceof NotFoundError){
			console.warn(err.stack);
			res.status(404);
			res.render('404.html',{
				sections : sections,
				message : err.message
			});
		}
		console.error(err.stack);
		res.status(500);
		res.render('500.html',{
			sections : sections,
			message : 'Oups something went wrong...'
		});
	});

};