/**
 * Module dependencies
 */

var co = require('co');
var marked = require('marked');
var highlighter = require('highlight.js');
var mark = function wrapMarker(markdownString, options) {
	return new Promise(function (resolve, reject) {
		marked(markdownString, options, function (err, html) {
			if (err) return reject(err);
			resolve(html);
		});
	});
};
var fs = require('co-fs');

/*!
 * Set default options of marked
 */

marked.setOptions({
	gfm: true,
	tables: true,
	breaks: false,
	pedantic: false,
	sanitize: false,
	smartLists: true,
	langPrefix: 'language-',
	highlight: function(code,lang){
		if(lang && highlighter.getLanguage(lang)) return highlighter.highlight(lang,code).value;
		return highlighter.highlightAuto(code).value;
	}
});

/**
 * Expose Article class
 */

module.exports = Article;

/**
 * Article class
 */

function Article(){

};

/**
 * List all articles
 * @param {String} path -
 * @param {Function} callback
 * @api public
 */

Article.list = function(path){
	return co(function *(){
		var files = yield fs.readdir(path);
		var articles = files.filter(function(filename){
			return !(filename === '.' || filename === '..' || filename[0] === '.');
		}).map(function(filename){
			var date = filename.slice(0,10);
			var title = filename.slice(11,filename.length - 3);
			var link = filename.slice(0,filename.length -3);
			var article = {
				title : title,
				link : link,
				date : date
			};
			return article;
		}).sort(function(prev,next){
			return new Date(prev.date).getTime() > new Date(next.date).getTime() ? -1 : 1;
		});
		return articles;
	});
};

/**
 * Read the article at the given `path`
 * @param {String} path -
 * @param {Function} callback
 */

Article.read = function(path){
	return co(function *(){
		var stat = yield fs.stat(path);
		var file = yield fs.readFile(path,'utf8');
		var article = yield mark(file,{});
		return article;
	});
}

/**
 * Check if the article exists
 * @param {String} path
 * @param {Function} callback
 */

Article.exists = function(path){
	return co(function *(){
		var exists = yield fs.exists(path);
		return exists;
	});
}