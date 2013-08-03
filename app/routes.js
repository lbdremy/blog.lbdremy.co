/**
 * Load models
 */

var Article = require('./models/article');

/**
 * Mount the routes on the given `app`
 */

module.exports = function(app){
	var root = __dirname + '/../articles';

	var sections = [
		{
			name : 'Thoughts'
		},
		{
			name : 'Issues'
		},
		{
			name : 'About me',
			link : 'https://github.com/lbdremy'
		}
	];

	app.get('/',function(req,res){
		res.render('layout.html',{
			sections : sections,
			section : 'index'
		});
	});


	app.get('/thoughts/',function(req,res,next){
		var section = 'thoughts';
		Article.list(root + '/' + section,function(err,articles){
			if(err) return next(err);
			res.render('list.html',{
				articles : articles,
				sections : sections,
				section : section
			});
		});
	});

	app.get('/thoughts/:post',function(req,res,next){
		var section = 'thoughts';
		Article.read(root + '/' + section + '/' + req.params.post,function(err,article){
			if(err) return next(err);
			res.render('article.html',{
				article : article,
				sections : sections,
				section : section
			});
		});
	});

	app.get('/issues/',function(req,res,next){
		var section = 'issues';
		Article.list(root + '/' + section,function(err,articles){
			if(err) return next(err);
			res.render('list.html',{
				articles : articles,
				sections : sections,
				section : section
			});
		});
	});

	app.get('/issues/:post',function(req,res,next){
		var section = 'issues';
		Article.read(root + '/' + section + '/' + req.params.post,function(err,article){
			if(err) return next(err);
			res.render('article.html',{
				article : article,
				sections : sections,
				section : section
			});
		});
	});

}