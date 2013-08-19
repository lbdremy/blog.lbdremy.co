/**
 * Module dependencies
 */


/**
 * Check if the `section` name given exists in the list of `sections` available
 * @param  {String} section  - name of the section
 * @param  {Array} sections - list of the sections available
 * @return {Boolean}        if the section exists return true otherwise false
 */

exports.isSection = function(section,sections){
	for(var i = 0; i < sections.length; i++){
		if(section === sections[i].name.toLowerCase() && !sections[i].link) return true;
	}
	return false;
}

/**
 * Deduce title from the name of the file using naming convention
 * @param {String} section - name of the section
 * @param {String} name - filename
 * @return {String} title of the article
 */

exports.getTitle = function(section,name){
	var title = '';
	if(name){
		title = name.slice(11).replace(/-/g,' ');
		title = title[0].toUpperCase() + title.slice(1) + ' - ';
	}
	return title + 'lbdremy/' + section.toLowerCase();
};