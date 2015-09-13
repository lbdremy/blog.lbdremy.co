/**
 * Module dependencies
 */

var inherits = require('util').inherits;

/**
 * Expose `NotFoundError` class
 */

module.exports = NotFoundError;

/**
 * NotFoundError class
 */

function NotFoundError(message){
	Error.call(this);
   	Error.captureStackTrace(this,arguments.callee);
   	this.name = 'NotFoundError';
   	this.message = message;
}

inherits(NotFoundError,Error);