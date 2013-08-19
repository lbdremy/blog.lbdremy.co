/**
 * Module dependencies
 */

var nunjucks = require('nunjucks');
var express = require('express');
var moment = require('moment');

/**
 * Load errors
 */

var NotFoundError = require('./errors/not-found-error');

/**
 * Configure the given the `app`
 */

module.exports = function(app){

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

	// Middlewares
	app.use(express.static(__dirname + '/../public'));
	app.use(app.router);
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

	// Use the templating system
	var env = new nunjucks.Environment(new nunjucks.FileSystemLoader(__dirname + '/views'));
	env.express(app);
	env.addFilter('prettyDate',function(date){
		return moment(new Date(date)).fromNow();
	});
	env.addFilter('urlencode',function(value){
		return encodeURIComponent(value);
	});


}
