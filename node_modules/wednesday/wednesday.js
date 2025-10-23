'use strict';

let wednesday = require('wikijs').default().page('wednesday');

module.exports = {
	data : () => wednesday.then(page => page.content()),
	images : () => wednesday.then(page => page.images())
};