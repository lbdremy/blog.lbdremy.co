/**
 * Module dependencies
 */

var utils = require('./utils');

/**
 * Load errors
 */

var NotFoundError = require('./errors/not-found-error');

/**
 * Load models
 */

var Article = require('./models/article');

/**
 * Mount the routes on the given `app`
 */

module.exports = function(app){
	var sections = app.get('sections');
	var root = __dirname + '/../articles';

	app.get('/',function(req,res){
		res.render('layout.html',{
			sections : sections,
			section : 'index'
		});
	});


	app.get('/:section/',function(req,res,next){
		if(!utils.isSection(req.params.section,sections)){
			return next(new NotFoundError('The section "' + req.params.section + '" is unknown.'));
		}
		var section = req.params.section;

		Article.list(root + '/' + section,function(err,articles){
			if(err) return next(err);
			res.render('list.html',{
				articles : articles,
				sections : sections,
				section : section
			});
		});
	});

	app.get('/:section/:article',function(req,res,next){
		if(!utils.isSection(req.params.section,sections)){
			return next(new NotFoundError('The section "' + req.params.section + '" is unknown.'));
		}
		var section = req.params.section;
		var article = root + '/' + section + '/' + req.params.article + '.md';
		Article.exists(article,function(err,exists){
			if(err) return next(err);
			if(!exists) return next(new NotFoundError('The article "' + req.params.article + '" is unknown.'))
			Article.read(article,function(err,article){
				if(err) return next(err);
				res.render('article.html',{
					article : article,
					sections : sections,
					section : section
				});
			});
		});
	});

}