'use strict';

let sunday = require('wikijs').default().page('sunday');

module.exports = {
	data : () => sunday.then(page => page.content()),
	images : () => sunday.then(page => page.images())
};