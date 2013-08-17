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